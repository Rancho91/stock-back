import express from "express";
import cors from "cors";

require("dotenv").config();
import { router } from "./routes";

const app = express();
const corsOptions = {
    exposedHeaders: 'auth-token',
  };
app.use(cors(corsOptions));
app.use(express.json());

app.use("/", router);

export default app;
