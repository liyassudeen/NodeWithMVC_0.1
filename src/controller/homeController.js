const homeModel = require("../model/homeModel");

exports.getHome = (req, res) => {
  const homeModelData = new homeModel();
  res.render("home", {
    pageTitle: homeModelData.title,
    pageHeader: homeModelData.header
  });
};

exports.postHome = (req, res) => {
  console.log(req.body.message);
};
