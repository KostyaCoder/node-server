const { Car } = require("../models");

module.exports.createCar = async function (req, resp, next) {
  try {
    const { car: carData, file } = req;

    if (file) {
      const car = await Car.create({ ...carData, imagePath: file.filename });
      resp.status(201).send(car);
    } else {
      const car = await Car.create(carData);
      resp.status(201).send(car);
    }
  } catch (error) {
    next(error);
  }
};

module.exports.getCars = async function (req, resp) {
  const cars = await Car.findAll();
  resp.send(cars);
};

module.exports.getCar = async function (req, resp, next) {
  try {
    const {
      params: { carId },
    } = req;

    const car = await Car.findById(+carId);
    resp.send(car);
  } catch (error) {
    next(error);
  }
};

module.exports.updateCar = async function (req, resp, next) {
  try {
    const {
      params: { carId },
      body,
      file,
    } = req;

    if (file) {
      const car = await Car.updateById(+carId, {
        ...body,
        imagePath: file.filename,
      });
      resp.send(car);
    } else {
      const car = await Car.updateById(+carId, body);
      resp.send(car);
    }
  } catch (error) {
    next(error);
  }
};

module.exports.deleteCar = async function (req, resp, next) {
  try {
    const {
      params: { carId },
    } = req;
    const car = await Car.deleteById(+carId);
    resp.send(car);
  } catch (error) {
    next(error);
  }
};
