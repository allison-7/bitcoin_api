const express = require("express");
const fetch = require("node-fetch");
const { Client } = require("pg");
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
  const data = await fetch(
    `https://api.coinbase.com/v2/prices/spot?currency=${req.query.currency}`
  );

  const text = await data.text();

  const prices = JSON.parse(text);

  res.send(prices);
});

app.get("/coin", async (req, res) => {
  const response = await client.query("SELECT * FROM coin");
  res.send(JSON.stringify(response.rows));
});

app.listen(port, () => {
  console.log(`Now running on http://localhost:${port}`);
});

//client.end();
