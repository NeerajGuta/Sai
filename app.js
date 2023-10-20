const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static("Public"));
app.use(express.urlencoded({ extended: false }));

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected........."))
  .catch((err) => console.log("Database Not Connected !!!"));

const UserRoute = require("./Routes/User/User");
const Address = require("./Routes/Admin/Address");
const Booking = require("./Routes/Admin/Booking");
const Enquire = require("./Routes/Admin/Enquire");
const Product = require("./Routes/Admin/Product");
const Addtocart = require("./Routes/Admin/Addtocart");
const Placeorder = require("./Routes/Admin/Placeorder");
const Adminlogin = require("./Routes/Admin/Adminlogin");
const Package = require("./Routes/Admin/Package");
const Agent = require("./Routes/User/Agent");
const TripPackage = require("./Routes/Admin/TripPackage");
const TripDate = require("./Routes/Admin/TripDate");
const PickUpLocation = require("./Routes/Admin/PickUp");
//user

app.use("/api/User", UserRoute);
app.use("/api/Admin", Address);
app.use("/api/Admin", Booking);
app.use("/api/Admin", Enquire);
app.use("/api/Admin", Product);
app.use("/api/Admin", Addtocart);
app.use("/api/Admin", Placeorder);
app.use("/api/Admin", Adminlogin);
app.use("/api/v1/admin", Package);
app.use("/api/v1", Agent);
app.use("/api/v1", TripPackage);
app.use("/api/v1", TripDate);
app.use("/api/v1", PickUpLocation);

app.get("/", (req, res) => {
  return res.status(200).json({ success: "Welcome to Sai Group " });
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
