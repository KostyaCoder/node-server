const express = require("express");
const app = express();
const bodyMes = express.json();
const { validateCars } = require("./middlewares/validate.mv");
const CarsController = require("./controllers/cars.controller");

app.get("/cars", CarsController.getCars);

app.get("/cars/:carId", CarsController.getCar);

app.post("/cars", bodyMes, validateCars, CarsController.createCar);

app.put("/cars/:carId", bodyMes, CarsController.updateCar);

app.delete("/cars/:carId", bodyMes, CarsController.deleteCar);

app.listen(5000);
