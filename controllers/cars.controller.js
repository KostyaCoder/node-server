const { Car } = require("../models");

module.exports.createCar = async function (req, resp) {
  const { car: carData } = req;
  const car = await Car.create(carData);
  resp.send(car);
};

module.exports.getCars = async function (req, resp) {
  const cars = await Car.findAll();
  resp.send(cars);
};

module.exports.getCar = async function (req, resp) {
  const {
    params: { carId },
  } = req;
  
  const car = await Car.findById(+carId);
  resp.send(car);
};

module.exports.updateCar = async function (req, resp) {
  const {
    params: { carId },
    body,
  } = req;
  const car = await Car.updateById(+carId, body);
  resp.send(car);
};

module.exports.deleteCar = async function (req, resp) {
  const {
    params: { carId },
  } = req;
  const car = await Car.deleteById(+carId);
  resp.send(car);
};
