import { routes } from './api/routes.js';
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage.jsx';
import PlayPage from './components/PlayPage.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';
import SignupPage from './components/SignupPage.jsx';
import LoginPage from './components/LoginPage.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import './index.css';


function App() {

  return (
    <Routes>
      <Route path={routes.signupPage()} element={<SignupPage />} />
      <Route path={routes.loginPage()} element={<LoginPage />} />
      <Route element={<PrivateRoute />}>
        <Route path={routes.homePage()} element={<HomePage />} />
        <Route path={routes.playPage()} element={<PlayPage />} />
      </Route>
      <Route path={routes.notfoundPage()} element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
