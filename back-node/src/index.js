const express = require("express");
const db = require("./database/database");

const app = express();

// Db connection
db();
//app.use(cors())

// Settings
app.set("port", process.env.PORT || 3000);

// Starting the server
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
  });