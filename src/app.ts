const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
import Router  from"./routes/router";
require("dotenv").config();
const app = express(); 

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.use("/", Router);


export default  app;
