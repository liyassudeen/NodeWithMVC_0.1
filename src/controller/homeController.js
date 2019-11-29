const homeModel = require("../model/homeModel");

exports.home = (req, res) => {
  const homeModelData = new homeModel();
  res.render("home", {
    pageTitle: homeModelData.title,
    pageHeader: homeModelData.header
  });
};
