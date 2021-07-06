const fetch = require("node-fetch");
const THREE_MINUTES = 180000;

const pollForData = (client) => {
    setInterval(async () => {
        const data = await fetch(
          `https://api.coinbase.com/v2/prices/spot?currency=USD`
        );
      
        const text = await data.text();
      
        const prices = JSON.parse(text);
        
        const response = await client.query(`INSERT INTO price(cashtag,date_created,price) 
            VALUES($1,$2,$3) RETURNING * `, [prices.data.base, new Date(), prices.data.amount]);
            console.log(response);
      }, THREE_MINUTES);    
};

module.exports = pollForData;