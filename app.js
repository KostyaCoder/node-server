const express = require("express");
const router = require("./routers");
const { handleErrors } = require("./middlewares/errrors.mv");
const app = express();

app.use(express.json());
app.use(router);
app.use(express.static("public"));
app.use(handleErrors);

app.listen(5000);
