const express = require("express");
const yup = require("yup");
const app = express();
const bodyMes = express.json();

const CAR_CREATION_SCHEMA = yup.object({
  model: yup.string().required(),
  manufacturer: yup.string().required(),
  yearIssue: yup.number().required(),
  engineSize: yup.number().required(),
  bodyType: yup.string().required(),
  electricVehicles: yup.boolean().required(),
});

app.get("/cars", (req, resp) => {
  resp.send("get car");
});

app.post("/cars", bodyMes, (req, resp) => {
  resp.send(req.body);
});

app.listen(5000);
