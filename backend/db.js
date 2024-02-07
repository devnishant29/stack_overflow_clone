const mongoose = require("mongoose");

const url =
  "mongodb+srv://devnishant29:mybirthdateis30@cluster0.ozdpo2j.mongodb.net/?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url)
    .then((res) => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error ", err));
};
