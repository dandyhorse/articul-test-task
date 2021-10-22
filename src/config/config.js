const dotenv = require('dotenv');

dotenv.config();

const {
  PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_PORT,
} = process.env;

const serverConfig = { port: PORT };

const SQLConfig = {
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  host: POSTGRES_HOST,
  port: parseInt(POSTGRES_PORT),
  dialect: 'postgres',
};

module.exports = {
  development: SQLConfig,
  dbconn: SQLConfig,
  serverConfig: serverConfig,
};
