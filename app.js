const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
require("dotenv").config();
require("./Helpers/init_mongodb");
const { verifyAccessToken } = require("./Helpers/jwt_helper");

const AuthRoute = require("./Routes/Auth.route");

const app = express();
// development mode
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', verifyAccessToken, async(req, res, next) => {
  console.log(req.headers['authorization']);
  res.send("SECRET MESSAGE!!!");
});

app.use('/auth', AuthRoute);

app.use(async(req, res, next) => {
  // const error = new Error("Not Found");
  // error.status = 404;
  // next(error);
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
