const REAL_TIME_SERVER_HOST =  'http://localhost'; // 'http://polls-api.webtraining.zone'; //
const REAL_TIME_SERVER_PORT = 3300;

const AUTH_SERVER_URL_HOST = 'http://projects-api.webtraining.zone';
const AUTH_SERVER_URL_PORT = '80';

export const AppConfig = {
  REAL_TIME_SERVER_URL: `${REAL_TIME_SERVER_HOST}:${REAL_TIME_SERVER_PORT}/`,
  API_SERVER_URL: `${REAL_TIME_SERVER_HOST}:${REAL_TIME_SERVER_PORT}/api/v1`,
  AUTH_SERVER_URL: `${AUTH_SERVER_URL_HOST}:${AUTH_SERVER_URL_PORT}`
};
