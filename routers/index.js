const express = require("express");
const CarsController = require("../controllers/cars.controller");
const {
  validateCars,
  validateUpdateCar,
} = require("../middlewares/validate.mv");
const { uploadeFile } = require("../middlewares/uploadeFile.mv");

const router = express.Router();

router
  .route("/cars")
  .get(CarsController.getCars)
  .post(uploadeFile.single("photo"), validateCars, CarsController.createCar);

router
  .route("/cars/:carId")
  .get(CarsController.getCar)
  .put(uploadeFile.single("photo"), validateUpdateCar, CarsController.updateCar)
  .delete(CarsController.deleteCar);

module.exports = router;
