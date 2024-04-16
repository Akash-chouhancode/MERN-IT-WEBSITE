const student = require("./../models/studentScheema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const home = async (req, res) => {
  try {
    res.status(200).send("we are using router form mvc");
  } catch (error) {
    console.log("Error in Home Page : ", error);
  }
};

// this api is used to register a new user without object distructuring the req.body and in this we also check the confirm password.

// const register=async(req,res)=>{
//     // console.log(req.body) this show the data in console
//     try {

//         const hashpass=await bcrypt.hash(req.body.password,10)
//         const chash = await bcrypt.hash(req.body.cpass,10)

//         const data = new student({
//             name: req.body.name,
//             email: req.body.email,
//             contact:req.body.contact,
//             password:hashpass,
//             cpass:chash
//         })

//         const cemail=await student.findOne({email:data.email})

//         if (!data.name||!data.email||!data.contact||!data.password||!data.cpass) {
//             res.status(400).json({msg:'all field are required'})

//         } else {

//         if (cemail) {
//             res.status(400).json({msg: 'email already exists'})

//         } else {

//         if (req.body.password===req.body.cpass) {
//             const studentCreated= await student.create(data)

//             res.status(200).json(studentCreated)
//         } else {
//             // return false
//             res.status(400).json({msg: 'password and cpass should be same'})
//         }

//         }

//         }

//     } catch (error) {
//         // console.log('Error In Registeration ', error);
//         res.status(500).send({msg:"internal server error"})

//     }

// }
// new api with some changes to make it work

const register = async (req, res) => {
  const { name, email, contact, password, cpass } = req.body;

  if (!name || !email || !contact || !password || !cpass) {
    return res.status(400).json({ msg: "all fields are required" });
  } else {
    const emailExist = await student.findOne({ email: email });
    if (emailExist) {
      return res.status(400).json({ msg: "Email already exists." });
    } else {
      if (password == cpass) {
        try {
          const hashpass = await bcrypt.hash(password, 10);
          const data = new student({
            name: name,
            email: email,
            contact: contact,
            password: hashpass,
          });

          const studentCreated = await data.save();
          const storedData=await student.findOne({ email: email });
          const token = jwt.sign({ _id: storedData._id },process.env.JWT_SECRET_KEY,{ expiresIn: "2h" });
          

          res.status(200).json({studentCreated,'token':token});
        } catch (error) {
          console.log(error);
          res.status(400).json({ msg: "Unable to Register!" });
        }
      } else {
        return res.status(400).json("Password does not match");
      }
    }
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email && password) {
      const userExist = await student.findOne({ email: email });
      if (userExist) {
        const isMatch = await bcrypt.compare(password, userExist.password);

        if (userExist.email === email && isMatch) {
          const token = jwt.sign({id: userExist._id },process.env.JWT_SECRET_KEY,{ expiresIn: "2h" });
          res.status(200).json({ msg: "Match! You have loged in", token: token });
        } else {
          res.status(401).json({ msg: "Invalid Email or Password" });
        }
      } else {
        res.status(400).json({ msg: " you are not a registerde user" });
      }
    } else {
      return res.status(400).json("Please enter all fields");
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "unable to log in!" });
  }
};
// middelwere
const getStudent=async (req,res)=>{
  try {
    // req . student yha kuch bhi lhik sk te h like req.user etc db se nhi aa rha 
    const studentData = req.student
    console.log(studentData)
    return res.status(200).json(studentData)
    
  } catch (error) {
    res.status(500).json({ msg: "unable to fetch data!" });
    
  }

}

module.exports = { home, register, login ,getStudent};
