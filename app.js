const express = require("express");
const app = express();
const bodyMes = express.json();
const { validateCars } = require("./middlewares/validate.mv");

const cars = [];

app.get("/cars", (req, resp) => {
  resp.send("get car");
});

app.post("/cars", bodyMes, validateCars, async (req, resp) => {
  const { car } = req;
  car.id = Date.now();
  cars.push(car);
  resp.send(car);
});

app.listen(5000);
