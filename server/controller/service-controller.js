const service = require("./../models/serviceScheema");

const services = async (req, res) => {
  try {
    const data = await service.find(); //get data from database

    if (!data) {
      res.status(400).json({ msg: "Service Data Not Found" });
    } else {
      res.status(200).json(data);
      // res.send(data)
    //   console.log(data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json('Internal server error');
  }
};
module.exports = services;
