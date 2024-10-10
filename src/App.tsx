import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Header from "./components/Header";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Appointments from "./pages/Appointments";
import Footer from "./components/Footer";
import ServiceProviders from "./pages/ServiceProviders";
import UserDashboard from "./pages/UserDashboard";
import ProfileForm from "./pages/ProfileForm";


export default function App() {
  return (
 <>
 <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/services/:type" element={<ServiceProviders/>}/>
      <Route path="/servicedetails/:id" element={<ServiceDetails/>}/>
      <Route path="/appointments" element={<Appointments/>}/>
      <Route path="/dashboard" element={<UserDashboard/>}/>
      <Route path="/profile-form" element={<ProfileForm/>}/>
    </Routes>
  <Footer/>  
 </>
  )
}