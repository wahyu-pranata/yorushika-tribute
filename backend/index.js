require("dotenv").config();
const express = require("express");
const app = express();
const port = 3002;
const qs = require("qs");
const axios = require("axios");

const apiURL = "https://youtube.googleapis.com/youtube/v3/search?";
const part = "snippet";
const channelId = "UCRIgIJQWuBJ0Cv_VlU3USNA";
const maxResults = "11";
const order = "date";
const apiKey = process.env.API_KEY;

app.get("/", (reqeust, response) => {
  response.set("Access-Control-Allow-Origin", "*");
  let query = reqeust.query;
  query.part = part;
  query.channelId = channelId;
  query.maxResults = maxResults;
  query.order = order;
  query.key = apiKey;
  let queryString = qs.stringify(query);
  axios(`${apiURL}${queryString}`).then((res) => {
    response.send(res.data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
