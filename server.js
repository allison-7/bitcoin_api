const express = require("express");
const { Client } = require("pg");
const pollForData = require("./coinbase");
const app = express();
const port = 3000;
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "dragonheart09",
  port: 5432,
});
client.connect();

app.get("/", async (req, res) => {
  res.send("");
});

app.get("/coin", async (req, res) => {
  const response = await client.query("SELECT * FROM coin");
  res.send(JSON.stringify(response.rows));
});

app.listen(port, () => {
  console.log(`Now running on http://localhost:${port}`);
});

pollForData(client);
