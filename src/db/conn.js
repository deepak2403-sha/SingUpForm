const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/EmployeeRegisteration")
  .then(() => {
    console.log("Conection Sucess");
  })
  .catch((err) => {
    console.log(err);
  });
