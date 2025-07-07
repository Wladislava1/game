import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { routes } from '../api/routes.js'

const PrivateRoute = () => {
  const location = useLocation()
  const isAuthenticated = Boolean(localStorage.getItem('token'));

  if (!isAuthenticated) {
    return <Navigate to={routes.loginPage()} state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
