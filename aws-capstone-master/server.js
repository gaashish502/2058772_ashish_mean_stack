//This file acts as the entry point of elearning server application

//Requiring all the packages necessary and making server.JS as entry point of application
const express = require("express"); //express package to render HTML pages using JS
const morgan = require("morgan"); //Morgan is used for logging request details
const bodyParser = require("body-parser"); //body-parser to parse the JSON Data
const mongoose = require("mongoose"); //Mongoose package to connect to back-end mongoDB
const cors = require("cors"); //Package to connect middle-ware or cross-platform applications
const config = require("./config");

const app = express(); //wrapping the new express application in app variable

app.use(express.static(process.cwd()));

// Only include useMongoClient only if your mongoose version is < 5.0.0
mongoose.connect("mongodb://localhost:27017/meanstack", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Mongoose Init: Success");
  }
});

app.get('/',(req,res)=>{
  res.sendFile(__dirname+"/index.html")

});

//express application using required packages
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(morgan("dev"));
app.use(express.static('images'))
app.use(cors());

const userRoutes = require("./routes/account");
const mainRoutes = require("./routes/main");
const sellerRoutes = require("./routes/seller");
const productSearchRoutes = require("./routes/product-search");
const user = require("./models/user");
const modifyProduct = require("./routes/modifyProduct")

//express application using Routes from this application
app.use("/api/product",modifyProduct);
app.use("/api", mainRoutes);
app.use("/api/accounts", userRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/search", productSearchRoutes);
app.use("/profile",user)

//Setting up the port for server to run on
app.listen(9090, (err) => {
  console.log("Server Init: 9090 ");
});
