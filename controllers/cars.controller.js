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
