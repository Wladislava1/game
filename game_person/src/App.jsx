import { routes } from './api/routes.js';
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage.jsx';
import PlayPage from './components/PlayPage.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';
import SignupPage from './components/SignupPage.jsx';
import LoginPage from './components/LoginPage.jsx';
import './index.css';


function App() {

  return (
    <Routes>
      <Route path={routes.homePage()} element={<HomePage />} />
      <Route path={routes.playPage()} element={<PlayPage />} />
      <Route path={routes.notfoundPage()} element={<NotFoundPage />} />
      <Route path={routes.signupPage()} element={<SignupPage />} />
      <Route path={routes.loginPage()} element={<LoginPage />} />
    </Routes>
  )
}

export default App
