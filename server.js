const express = require("express");

var bodyParser = require("body-parser");

const app = express();
const port = 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const {
  getUsers,
  Login,
  Logout,
  registerAdmin,
  RegisterMember,
} = require("./controllers/userController");
const {
  getCars,
  getDeletedCars,
  getCarById,
  deleteCar,
  updateCar,
  createCar,
} = require("./controllers/carsController");
const { verifyToken } = require("./middleware/VerifyToken");

const prefix = "/v1/api/";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//user apis
app.get(prefix + "users", verifyToken, getUsers);
app.post(prefix + "registermember", RegisterMember);
app.post(prefix + "login", Login);
app.delete(prefix + "logout", Logout);
app.post(prefix + "registeradmin", verifyToken, registerAdmin);

//cars apis
app.get(prefix + "cars", verifyToken, getCars);
app.get(prefix + "cars/:id", verifyToken, getCarById);
app.get(prefix + "deletecars", verifyToken, getDeletedCars);
app.put(prefix + "updatecars/:id", verifyToken, updateCar); // update data mobil
app.put(prefix + "cars/:id", verifyToken, deleteCar); // hapus data mobil
app.post(prefix + "createcars", verifyToken, createCar); // buat data mobil

app.listen(port, () => {
  console.log(`This app listening to ${port}`);
});
