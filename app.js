const express = require("express");
const router = require("./routers");
const { handleErrors } = require("./middlewares/errrors.mv");
const CONSTANTS = require("./constants");

const app = express();

app.use(express.json());
app.use(router);
app.use(express.static(CONSTANTS.FILE_PATH));
app.use(handleErrors);

app.listen(5000);
