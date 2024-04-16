import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./component/Register";
import Services from "./component/Services";
import Log_in from "./component/Log_in";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import AdminPage from "./layout/AdminPage";
import AdminStudent from "./component/AdminStudent";
import AdminContact from "./component/AdminContact";
// import Log_out from "./component/Log_out";
import AdminService from "./component/AdminService";
import AdminDeleteService from "./component/AdminDeleteService";

function App() {
  return (
    <>
      <BrowserRouter>
      {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/login" element={<Log_in />}></Route>
          {/* <Route path="/logout" element={<Log_out />}></Route> */}
          <Route path="/admin" element={<AdminPage/>}>

            <Route path="students" element={<AdminStudent/>}></Route>
            <Route path="contacts" element={<AdminContact/>}></Route>
            <Route path="services" element={<AdminService/>}></Route>
            <Route path="service/delete" element={<AdminDeleteService/>}></Route>
          </Route>
         
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
