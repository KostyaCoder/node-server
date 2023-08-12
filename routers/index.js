const express = require("express");
const router = express.Router();
const CarsController = require("../controllers/cars.controller");
const bodyParser = express.json();
const { validateCars } = require("../middlewares/validate.mv");

router
  .route("/cars")
  .get(CarsController.getCars)
  .post(bodyParser, validateCars, CarsController.createCar);

router
  .route("/cars/:carId")
  .get(CarsController.getCar)
  .put(CarsController.updateCar)
  .delete(CarsController.deleteCar);

module.exports = router;
