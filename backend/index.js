const express = require('express')
const cors = require('cors')
require('dotenv').config()

const connectDB = require(`./config/db`)

const app = express()
app.use(cors());

const PORT = 8000 || process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Connect to DB")
    console.log("server is running");
  })
})


