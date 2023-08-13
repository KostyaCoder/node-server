const multer = require("multer");
const express = require("express");
const path = require("path");
const CarsController = require("../controllers/cars.controller");
const {
  validateCars,
  validateUpdateCar,
} = require("../middlewares/validate.mv");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "..", "public", "images"));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploade = multer({ storage });

router
  .route("/cars")
  .get(CarsController.getCars)
  .post(uploade.single("photo"), validateCars, CarsController.createCar);

router
  .route("/cars/:carId")
  .get(CarsController.getCar)
  .put(uploade.single("photo"), validateUpdateCar, CarsController.updateCar)
  .delete(CarsController.deleteCar);

module.exports = router;
