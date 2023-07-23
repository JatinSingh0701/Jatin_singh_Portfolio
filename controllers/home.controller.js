const formModel = require("../models/form.db");

// Get requests for Home
exports.getHome = (req, res) => {
  res.render("home", {
    pageTitle: "Home",
  });
};

exports.postHome = (req, res) => {
  const formDetails = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  };

  
  formModel.saveFormData(formDetails);

  console.log(formDetails);
  res.redirect("/");
};
