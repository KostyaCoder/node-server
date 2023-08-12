const yup = require("yup");

const CAR_CREATION_SCHEMA = yup.object({
  model: yup.string().required(),
  manufacturer: yup.string().required(),
  yearIssue: yup.number().required(),
  engineSize: yup.number().required(),
  bodyType: yup.string().required(),
  electricVehicles: yup.boolean().required(),
});

const validateCars = async function (req, resp, next) {
  try {
    req.car = await CAR_CREATION_SCHEMA.validate(req.body);
    next();
  } catch (error) {
    resp.send("Error. Invalid data body");
  }
};

module.exports.validateCars = validateCars;
