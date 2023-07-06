const express = require("express");
const {PORT} = process.env;
const app = express()
const { conn } = require('./db.js');

app.use(express.json())
conn.sync({ force: true }).then(() => {

app.listen(3001, () =>{
    console.log("server running on port 3001")
})
})