const { CAR_CREATION_SCHEMA } = require("../validation/cars");

const validateCars = async function (req, resp, next) {
  try {
    req.car = await CAR_CREATION_SCHEMA.validate(req.body);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports.validateCars = validateCars;
