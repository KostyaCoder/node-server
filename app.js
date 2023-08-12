const express = require("express");
const app = express();
const bodyParser = express.json();
const { validateCars } = require("./middlewares/validate.mv");
const CarsController = require("./controllers/cars.controller");

app.get("/cars", CarsController.getCars);

app.get("/cars/:carId", CarsController.getCar);

app.post("/cars", bodyParser, validateCars, CarsController.createCar);

app.put("/cars/:carId", bodyParser, CarsController.updateCar);

app.delete("/cars/:carId", CarsController.deleteCar);

app.listen(5000);
