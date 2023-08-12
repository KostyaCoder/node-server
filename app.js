const express = require("express");
const app = express();
const bodyMes = express.json();
const { validateCars } = require("./middlewares/validate.mv");
const CarsController = require("./controllers/cars.controller");

app.get("/cars", CarsController.getCars);

app.post("/cars", bodyMes, validateCars, CarsController.createCar);

app.listen(5000);
