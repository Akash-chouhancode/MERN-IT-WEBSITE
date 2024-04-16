const { model } = require("mongoose");
const student = require("../models/studentScheema");

const adminmiddel = async (req, res, next) => {
  try {
    if (student.isAdmin == false) {
      return res.status(400).json({ msg: "Unauthorized Access" });
    }
    req.isAdmin == true;
    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = adminmiddel;
