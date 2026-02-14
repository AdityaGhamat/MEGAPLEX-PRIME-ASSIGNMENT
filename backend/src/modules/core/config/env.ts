import dotenv from "dotenv";
dotenv.config();
export default {
  PORT: Number(process.env.PORT),
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL as string,
};
