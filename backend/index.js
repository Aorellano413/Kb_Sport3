// Este archivo es un ejemplo de un servidor express que se conecta a una base de datos MySQL.

const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "database_name",
});

db.connect((err) => {
  if (err) {
    console.error("Error conectandose con la base de datos:", err);
    return;
  }
  console.log("Conectado a la base de datos.");
});

app.get("/person/:id", (req, res) => {
  const personId = req.params.id;
  const query = "SELECT * FROM persons WHERE id = ?";

  db.query(query, [personId], (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).send("Error fetching data");
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
