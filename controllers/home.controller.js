// const formModel = require("../models/Form.model");

//Get req

exports.getHome = (req, res) => {
  res.render("home", {
    home: true,
    pageTitle: "Home",
  });
};

exports.getPortfolio = (req, res) => {
  res.render("portfolio", {
    pageTitle: "Portfolio",
  });
};

//Post Req

exports.postFormDetails = (req, res) => {
  const formDetails = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  };
  const newFormDetail = formModel.build(formDetails);
  newFormDetail
    .save()
    .then(() => {
      console.log("User data saved successfully!");
      res.redirect("/");
    })
    .catch((error) => {
      console.error("Error saving user data:", error);
      res.redirect("/");
    });
};
