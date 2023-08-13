const yup = require("yup");

const CAR_CREATION_SCHEMA = yup.object({
  model: yup.string().required(),
  manufacturer: yup.string().required(),
  yearIssue: yup.number().required(),
  engineSize: yup.number().required(),
  bodyType: yup.string().required(),
  electricVehicles: yup.boolean().required(),
});

module.exports.CAR_UPDATION_SCHEMA = yup.object({
  model: yup.string(),
  manufacturer: yup.string(),
  yearIssue: yup.number(),
  engineSize: yup.number(),
  bodyType: yup.string(),
  electricVehicles: yup.boolean(),
});

module.exports.CAR_CREATION_SCHEMA = CAR_CREATION_SCHEMA;
