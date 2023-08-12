const express = require("express");
const yup = require("yup");
const app = express();
const bodyMes = express.json();

const cars = [];

const CAR_CREATION_SCHEMA = yup.object({
  model: yup.string().required(),
  manufacturer: yup.string().required(),
  yearIssue: yup.number().required(),
  engineSize: yup.number().required(),
  bodyType: yup.string().required(),
  electricVehicles: yup.boolean().required(),
});

app.get("/cars", (req, resp) => {
  resp.send("get car");
});

app.post(
  "/cars",
  bodyMes,
  async (req, resp, next) => {
    try {
      req.car = await CAR_CREATION_SCHEMA.validate(req.body);
      next();
    } catch (error) {
      resp.send("Error. Invalid data body");
    }
  },
  async (req, resp) => {
    const { car } = req;
    car.id = Date.now();
    cars.push(car);
    resp.send(car);
  }
);

app.listen(5000);
