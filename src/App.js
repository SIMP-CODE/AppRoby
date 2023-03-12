import Galery from "./pages/galery"

// Admin
import Admin from "./pages/admin/dashboard"
import MobilBaru from  "./pages/admin/mobilbaru"
// Form
import FormNewCar from "./pages/admin/form/formnewcar"
import FormGaleri from "./pages/admin/form/formgaleri"
// Login
import Login from "./pages/login"

// Import CSS
import './css/style.css'

// Import Page Roby
import Awal from './views/home'
import Coba from './views/test-drive'
import Foto from './views/galery'
import Service from './views/service'
import Credit from './views/credit'
import Detil from './views/detail.jsx'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="page">
    <Router>
      <Routes>
        <Route path="/" exact element={<Awal/>} />
        <Route path="/test-drive" exact element={<Coba/>} />
        <Route path="/galery" exact element={<Foto/>} />
        <Route path="/booking-service" exact element={<Service/>} />
        <Route path="/simulasi-credit" exact element={<Credit/>} />
        <Route path="/detail-mobil" exact element={<Detil/>} />

        <Route path="/galeri" exact element={<Galery/>} />

        <Route path="/admin" exact element={<Admin/>} />
        <Route path="/mobil-baru" exact element={<MobilBaru/>} />

        <Route path="/form-mobil_baru" exact element={<FormNewCar/>} />
        <Route path="/form-galeri" exact element={<FormGaleri/>} />

        <Route path="/login" exact element={<Login/>} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
