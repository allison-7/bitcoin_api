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

client.query("INSERT INTO coin VALUES ('eth', 'blue')", (err,res) => {
  console.log(err, res)
});

app.get("/", async (req, res) => {
  const data = await fetch(
    `https://api.coinbase.com/v2/prices/spot?currency=${req.query.currency}`
  );

  const text = await data.text();

  const prices = JSON.parse(text);

  res.send(prices);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//client.end();
