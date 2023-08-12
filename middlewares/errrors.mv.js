const { ValidationError } = require("yup");

module.exports.handleErrors = async (error, req, resp, next) => {
  if (error instanceof ValidationError) {
    resp.status(400).send(error.errors);
  } else {
    resp.status(404).send(error.message);
  }
};
