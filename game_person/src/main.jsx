import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CoinsContext } from './components/MoneyContext.js';
import App from './App.jsx';

const Root = () => {
  const [coins, setCoins] = useState(0);

  return (
    <React.StrictMode>
      <CoinsContext.Provider value={{ coins, setCoins }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CoinsContext.Provider>
    </React.StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Root />);
