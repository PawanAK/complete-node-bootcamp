const express = require('express');
const morgan = require("morgan")

const fs = require('fs');
const app = express();

//1)Middleware  

app.use(morgan("dev"))

app.use(express.json());

app.use((req, res, next) => {
  console.log("hello from midleware");
  next();
})

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
})


const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

//2) Route Handlers


const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: "This route is not yet defined",
  })
}

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: "This route is not yet defined",
  })
}

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: "This route is not yet defined",
  })
}

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: "This route is not yet defined",
  })
}

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: "This route is not yet defined",
  })
}



//3) Routes





//4) Start

const port = 3000;
app.listen(port, () => {
  console.log(`App running at ${port}`);
});
