import { routes } from './api/routes.js';
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage.jsx';
import PlayPage from './components/PlayPage.jsx';
import './index.css';

function App() {

  return (
    <Routes>
      <Route path={routes.homePage()} element={<HomePage />} />
      <Route path={routes.playPage()} element={<PlayPage />} />
    </Routes>
  )
}

export default App
