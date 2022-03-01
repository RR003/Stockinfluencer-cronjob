const express = require("express");
const cron = require("node-cron");
const cheerio = require("cheerio");
const open = require("open");
const axios = require("axios");

/**
 *
 * Make a function from stockfluence-backend that will return array that contains the information right there, instead of websraping"
 *
 */

const app = express();

const API = axios.create({
  baseURL: "https://stockinfluencer-backend.herokuapp.com/",
});
// only 5 calls per minute
app.listen(2400, () => {
  console.log("Server started at port 2400");
});
let list_of_stocks = [
  "Bitcoin",
  "Dogecoin",
  "Ethereum",
  "Chainlink",
  "Solana",
  "Shibainu",
  "Cardano",
  "Tezos",
  "Polkadot",
  "AxieInfinity",
  "Terra",
];
cron.schedule("00 30 23 * * *", async () => {
  let junk = await API.get(`twitter/getPopularTweets/Bitcoin/20`);
});
cron.schedule("10 32 23 * * *", async () => {
  try {
    let { data } = await API.get(
      `twitter/masterlistcrypto/${list_of_stocks[0]}`
    );

    for (let i = 0; i < data.length; i++) {
      let posted_data = {
        Stock: data[i][7],
        Tweet: data[i][0],
        Time: data[i][3],
        Url: data[i][2],
        User: data[i][4],
        ShortTermChange: data[i][5],
        LongTermChange: data[i][6],
      };
      await API.post("db/creatingTweet", posted_data);
    }
  } catch (error) {
    console.log(error);
  }
});
// update to 10 34 20
cron.schedule("10 34 23 * * *", async () => {
  try {
    let { data } = await API.get(
      `twitter/masterlistcrypto/${list_of_stocks[1]}`
    );

    for (let i = 0; i < data.length; i++) {
      let posted_data = {
        Stock: data[i][7],
        Tweet: data[i][0],
        Time: data[i][3],
        Url: data[i][2],
        User: data[i][4],
        ShortTermChange: data[i][5],
        LongTermChange: data[i][6],
      };
      await API.post("db/creatingTweet", posted_data);
    }
  } catch (error) {
    console.log(error);
  }
});

cron.schedule("10 36 23 * * *", async () => {
  try {
    let { data } = await API.get(
      `twitter/masterlistcrypto/${list_of_stocks[2]}`
    );

    for (let i = 0; i < data.length; i++) {
      let posted_data = {
        Stock: data[i][7],
        Tweet: data[i][0],
        Time: data[i][3],
        Url: data[i][2],
        User: data[i][4],
        ShortTermChange: data[i][5],
        LongTermChange: data[i][6],
      };
      await API.post("db/creatingTweet", posted_data);
    }
  } catch (error) {
    console.log(error);
  }
});

cron.schedule("10 38 23 * * *", async () => {
  try {
    let { data } = await API.get(
      `twitter/masterlistcrypto/${list_of_stocks[3]}`
    );

    for (let i = 0; i < data.length; i++) {
      let posted_data = {
        Stock: data[i][7],
        Tweet: data[i][0],
        Time: data[i][3],
        Url: data[i][2],
        User: data[i][4],
        ShortTermChange: data[i][5],
        LongTermChange: data[i][6],
      };
      await API.post("db/creatingTweet", posted_data);
    }
  } catch (error) {
    console.log(error);
  }
});

cron.schedule("10 40 23 * * *", async () => {
  try {
    let { data } = await API.get(
      `twitter/masterlistcrypto/${list_of_stocks[4]}`
    );

    for (let i = 0; i < data.length; i++) {
      let posted_data = {
        Stock: data[i][7],
        Tweet: data[i][0],
        Time: data[i][3],
        Url: data[i][2],
        User: data[i][4],
        ShortTermChange: data[i][5],
        LongTermChange: data[i][6],
      };
      await API.post("db/creatingTweet", posted_data);
    }
  } catch (error) {
    console.log(error);
  }
});

cron.schedule("10 42 23 * * *", async () => {
  try {
    let { data } = await API.get(
      `twitter/masterlistcrypto/${list_of_stocks[5]}`
    );

    for (let i = 0; i < data.length; i++) {
      let posted_data = {
        Stock: data[i][7],
        Tweet: data[i][0],
        Time: data[i][3],
        Url: data[i][2],
        User: data[i][4],
        ShortTermChange: data[i][5],
        LongTermChange: data[i][6],
      };
      await API.post("db/creatingTweet", posted_data);
    }
  } catch (error) {
    console.log(error);
  }
});

cron.schedule("10 44 23 * * *", async () => {
  try {
    let { data } = await API.get(
      `twitter/masterlistcrypto/${list_of_stocks[6]}`
    );

    for (let i = 0; i < data.length; i++) {
      let posted_data = {
        Stock: data[i][7],
        Tweet: data[i][0],
        Time: data[i][3],
        Url: data[i][2],
        User: data[i][4],
        ShortTermChange: data[i][5],
        LongTermChange: data[i][6],
      };
      await API.post("db/creatingTweet", posted_data);
    }
  } catch (error) {
    console.log(error);
  }
});

cron.schedule("10 46 23 * * *", async () => {
  try {
    let { data } = await API.get(
      `twitter/masterlistcrypto/${list_of_stocks[7]}`
    );

    for (let i = 0; i < data.length; i++) {
      let posted_data = {
        Stock: data[i][7],
        Tweet: data[i][0],
        Time: data[i][3],
        Url: data[i][2],
        User: data[i][4],
        ShortTermChange: data[i][5],
        LongTermChange: data[i][6],
      };
      await API.post("db/creatingTweet", posted_data);
    }
  } catch (error) {
    console.log(error);
  }
});

cron.schedule("10 48 23 * * *", async () => {
  try {
    let { data } = await API.get(
      `twitter/masterlistcrypto/${list_of_stocks[8]}`
    );

    for (let i = 0; i < data.length; i++) {
      let posted_data = {
        Stock: data[i][7],
        Tweet: data[i][0],
        Time: data[i][3],
        Url: data[i][2],
        User: data[i][4],
        ShortTermChange: data[i][5],
        LongTermChange: data[i][6],
      };
      await API.post("db/creatingTweet", posted_data);
    }
  } catch (error) {
    console.log(error);
  }
});

cron.schedule("10 50 23 * * *", async () => {
  try {
    let { data } = await API.get(
      `twitter/masterlistcrypto/${list_of_stocks[9]}`
    );

    for (let i = 0; i < data.length; i++) {
      let posted_data = {
        Stock: data[i][7],
        Tweet: data[i][0],
        Time: data[i][3],
        Url: data[i][2],
        User: data[i][4],
        ShortTermChange: data[i][5],
        LongTermChange: data[i][6],
      };
      await API.post("db/creatingTweet", posted_data);
    }
  } catch (error) {
    console.log(error);
  }
});

cron.schedule("10 52 23 * * *", async () => {
  try {
    let { data } = await API.get(
      `twitter/masterlistcrypto/${list_of_stocks[10]}`
    );

    for (let i = 0; i < data.length; i++) {
      let posted_data = {
        Stock: data[i][7],
        Tweet: data[i][0],
        Time: data[i][3],
        Url: data[i][2],
        User: data[i][4],
        ShortTermChange: data[i][5],
        LongTermChange: data[i][6],
      };
      await API.post("db/creatingTweet", posted_data);
    }
  } catch (error) {
    console.log(error);
  }
});
