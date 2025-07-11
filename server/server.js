const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const connectDB = require('./db.js');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Имя пользователя и пароль обязательны' });
  }

  try {
    const db = await connectDB();

    const [existingUsers] = await db.execute('SELECT id FROM users WHERE username = ?', [username]);
    if (existingUsers.length > 0) {
      return res.status(409).json({ message: 'Пользователь с таким именем уже существует' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.execute('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);

    res.status(201).json({ username });
  } catch (error) {
    console.error('Ошибка при регистрации:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Имя пользователя и пароль обязательны' });
  }

  try {
    const db = await connectDB();

    const [users] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
    if (users.length === 0) {
      return res.status(401).json({ message: 'Пользователь не найден' });
    }

    const user = users[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Неверный пароль' });
    }

    res.json({ message: 'Вход выполнен успешно', username: user.username });
  } catch (error) {
    console.error('Ошибка при входе:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

app.get('/money', async (req, res) => {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ message: 'Username не передан' });
  }

  try {
    const db = await connectDB();

    const [users] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
    if (users.length === 0) {
      return res.status(401).json({ message: 'Пользователь не найден' });
    }

    const user = users[0];

    res.json({ money: user.money });
  } catch (error) {
    console.error('Ошибка при получении монет:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

app.post('/money', async (req, res) => {
  const { username, money } = req.body;

  if (!username) {
    return res.status(400).json({ message: 'Username не передан' });
  }

  try {
    const db = await connectDB();

    const [updateResult] = await db.execute(
      'UPDATE users SET money = money + ? WHERE username = ?',
      [money, username]
    );

    if (updateResult.affectedRows === 0) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    const [rows] = await db.execute(
      'SELECT money FROM users WHERE username = ?',
      [username]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Пользователь не найден после обновления' });
    }

    res.json({ money: rows[0].money });
  } catch (error) {
    console.error('Ошибка при получении монет:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});