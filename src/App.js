import Home from "./pages/home";
import Detail from "./pages/detail";
import Galery from "./pages/galery"
import TestDrive from "./pages/test-drive"
import InfoDerek from "./pages/info-derek"
import Coba from "./pages/coba"

// Admin
import Admin from "./pages/admin/dashboard"
import MobilBaru from  "./pages/admin/mobilbaru"
// Form
import FormNewCar from "./pages/admin/form/formnewcar"
import FormGaleri from "./pages/admin/form/formgaleri"
// Login
import Login from "./pages/login"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />      
        <Route path="/detail" exact element={<Detail/>} />
        <Route path="/galery" exact element={<Galery/>} />
        <Route path="/test-drive" exact element={<TestDrive/>} />
        <Route path="/info-derek" exact element={<InfoDerek/>} />

        <Route path="/admin" exact element={<Admin/>} />
        <Route path="/mobil-baru" exact element={<MobilBaru/>} />

        <Route path="/form-mobil_baru" exact element={<FormNewCar/>} />
        <Route path="/form-galeri" exact element={<FormGaleri/>} />

        <Route path="/login" exact element={<Login/>} />

        <Route path="/Coba" exact element={<Coba/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
