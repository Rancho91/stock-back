import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
dotenv.config();
const {DB_PASSWORD} = process.env
console.log(DB_PASSWORD)
export const sequelize = new Sequelize("stock", "postgres", `Rama1291SQL`, {
  host: "localhost",
  dialect: "postgres",
  models: [__dirname + "/models"],
  repositoryMode: true,
});
// lalala