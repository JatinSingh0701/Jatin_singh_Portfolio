const express = require("express");
const bodyParser = require("body-parser");
const homeRouter = require("./routes/home.routes");
const sequelize = require("./utils/database");

const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use(homeRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Server
const port = process.env.PORT || 3000;

sequelize
  .sync({ force: true })
  .then((result) => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
