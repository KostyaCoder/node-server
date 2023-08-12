const express = require("express");
const app = express();
const bodyMes = express.json();

app.get("/cars", (req, resp) => {
  resp.send("get car");
});

app.post("/cars", bodyMes, (req, resp) => {
  resp.send(req.body);
});

