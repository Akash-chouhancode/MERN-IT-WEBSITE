
const student = require("./../models/studentScheema");
const contact = require("./../models/contactScheema");
const service = require("./../models/serviceScheema");

const path = require("path");

const filePath = path.join(__dirname, "..", "assets");
const fs = require("fs");

const getallstudent = async (req, res) => {
  try {
    const studentdata = await student.find();
    if (!studentdata || studentdata.length === 0) {
      res.status(404).json({ msg: "No Student data found" });
    } else {
      res.status(200).json(studentdata);
      // return studentdata;
    }
  } catch (error) {
    console.log("Error :", error);
    return res.status(500).json({ msg: "Internal Error" });
  }
};

const getallcontact = async (req, res) => {
  try {
    const contactData = await contact.find();
    if (!contactData) {
      return res.status(404).json({ msg: "Contact not Found!" });
    } else {
      res.status(200).json(contactData);
    }
  } catch (e) {
    return res.status(500).json({ msg: "Server Error" });
  }
};

const getsingledata = async (req, res) => {
  const id = req.params.id;
  // params is use for the pass the id in url key k ander se mil te h
  try {
    const datavalue = await student.findOne({ _id: id });
    if (!datavalue) {
      return res.status(404).json({ msg: `${id} is not valid` });
    } else {
      res.status(200).json(datavalue);
    }
  } catch (e) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const deletesingledata = async (req, res) => {
  const id = req.params.id;
  try {
    const datadeleted = await student.deleteOne({ _id: id });
    if (!datadeleted) {
      return res.status(404).json({ msg: `${id} is not found` });
    } else {
      res.status(200).json({ msg: `${id} has been deleted successfully.` });
    }
  } catch (e) {
    res.status(500).json({ msg: "Internal server error." });
  }
};

const updatedata = async (req, res) => {
  const id = req.params.id;
  try {
    const update = await student.updateOne({ _id: id }, { $set: req.body });

    if (!update) {
      return res.status(404).json({ msg: "No entry with this ID" });
    } else {
      res.status(201).json({ msg: "Entry with the ID has been updated." });
    }
  } catch (error) {
    console.log(error);
  }
};

const deletesinglcontact = async (req, res) => {
  const id = req.params.id;
  try {
    const datadeleted = await contact.deleteOne({ _id: id });
    if (!datadeleted) {
      return res.status(404).json({ msg: `${id} is not found` });
    } else {
      res.status(200).json({ msg: `${id} has been deleted successfully.` });
    }
  } catch (e) {
    res.status(500).json({ msg: "Internal server error." });
  }
};

const addservices = async (req, res) => {
  const { service_name, description } = req.body;
  const { uploadFile } = req.files;
  console.log(uploadFile);

  try {
    if (!service_name || !description) {
      res.status(400).json({ msg: "all fields are required" });
    } else {
      const serviceExist = await service.findOne({
        service_name: service_name,
      });
      if (serviceExist) {
        res.status(400).json({ msg: "Service already exists." });
      } else {
        uploadFile.mv(path.join(filePath, uploadFile.name));
        const newService = new service({
          service_name,
          description,
          image: uploadFile.name,
        });

        const savedService = await newService.save();
        res.status(201).json({ msg: "Service saved.", data: savedService });
      }
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal server error in saving service" });
  }
};

const adminAllservic = async (req, res) => {
  try {
    const serviceData = await service.find();
    if (!serviceData) {
      res.status(400).json({ msg: "Service not found" });
    } else {
      res.status(200).json(serviceData);
    }
  } catch (error) {
    res.status(500).json({ msg: "Error in fetching services from the database." });
  }
};

 const deleteAllservic = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await service.findById(id);

    if (!data) {
      return res.status(404).json({ msg: "Data Not Found!" });
    }

    //delete the file from the static folder

    const filePath = path.join(__dirname, "..", "assets", data.image);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    await service.findByIdAndDelete(id);
    res.status(200).json({ msg: "Deleted Successfully!" });
  } catch (error) {
    // console.log("Error : ", error);
    res.status(500).json("Internal Server Error!" );
  }






 }





module.exports = {
  getallstudent,
  getallcontact,
  getsingledata,
  deletesingledata,
  updatedata,
  deletesinglcontact,
  addservices,
  adminAllservic,
  deleteAllservic
};
