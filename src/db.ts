import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
dotenv.config();
const {DB_PASSWORD, DB_USER,DB_NAME,DB_HOST} = process.env
console.log(DB_PASSWORD)
export const sequelize = new Sequelize(`${DB_NAME}`, `${DB_USER}`, `${DB_PASSWORD}`, {
  host: `${DB_HOST}`,
  dialect: "postgres",
  models: [__dirname + "/models"],
  repositoryMode: true,
});
