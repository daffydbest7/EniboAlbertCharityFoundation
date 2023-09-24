import express from 'express';
const bodyParser = require("body-parser");
import cors from "cors";
const multer = require('multer');
//const db = require("./config/db/db");
const userRoutes = require("./routes/userRoutes");
const gifRoutes = require("./routes/gifRoutes")
const articleRoutes = require("./routes/articleRoutes")
const { createUsersAccount } = require("./config/db/queries/initialize-user-table");
const {createGifTable} = require("./config/db/queries/initialize-gif-table");
const {createArticleTable} = require("./config/db/queries/initialize-article-table");



//create a port to listen to
const app = express();
app.use(express.json());
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//app.options("*", cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));

//app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));


//instantiate bodyparser
//app.use(bodyParser.json());

//define a route for the root URL
app.get("/", (req, res) => {
  res.send("Server is running now...");
});


//routes
app.use("/api/v1", userRoutes);
app.use("/api/v1", gifRoutes);
app.use("/api/v1", articleRoutes);



//tell if the server is running
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running now on port ${PORT}`));