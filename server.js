const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const data = await fetch(
    "https://api.coinbase.com/v2/prices/spot?currency=USD"
  );

  const text = await data.text();

  const prices = JSON.parse(text);

  console.log(prices.data.base);

  res.send(`Name Is: ${req.query.name}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
