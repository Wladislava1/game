const API_BASE ="http://localhost:3000";

export const routes = {
  login: () => `${API_BASE}/login`,
  signup: () => `${API_BASE}/signup`,
  womens: () => `${API_BASE}/womens`,
  money: () => `${API_BASE}/money`,
  cloth: () => `${API_BASE}/cloth`,
  homePage: () => '/',
  playPage: () => '/play',
  collectionPage: () => '/collection',
  loginPage: () => '/login',
  signupPage: () => '/signup',
  notfoundPage: () => '*',
}
