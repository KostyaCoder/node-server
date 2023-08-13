const {
  CAR_CREATION_SCHEMA,
  CAR_UPDATION_SCHEMA,
} = require("../validation/cars");

const validateCars = async function (req, resp, next) {
  try {
    req.car = await CAR_CREATION_SCHEMA.validate(req.body);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports.validateUpdateCar = async function (req, resp, next) {
  try {
    req.car = await CAR_UPDATION_SCHEMA.validate(req.body);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports.validateCars = validateCars;
