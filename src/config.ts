/* eslint-disable prettier/prettier */
import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    testVar: process.env.TEST_VAR,
    postgres: {
      dbName: process.env.DB_NAME,
      port: parseInt(process.env.DB_PORT, 10),
      password: process.env.DB_PASSWORD,
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
    },
    database: {
      type: process.env.DB_TYPE,
      name: process.env.DATABASE_NAME,
      port: parseInt(process.env.DATABASE_PORT, 10),
      url: process.env.DATABASE_URL,
      psswd: process.env.DATABASE_PSSWD,
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
    },
    apiKey: process.env.API_KEY,
    jwtSecret: process.env.JWT_SECRET,
  };
});
