import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Appointments from "./pages/Appointments";
import ServiceProviders from "./pages/ServiceProviders";
import UserDashboard from "./pages/UserDashboard";
import ProfileForm from "./pages/ProfileForm";
import PublicLayout from "./components/PublicLayout";
import AuthenticatedLayout from "./components/AuthenticatedLayout";
import VerifyEmail from "./pages/VerifyEmail";


export default function App() {
  return (
 <>
 
    <Routes>
      <Route element={<PublicLayout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/verify-email" element={<VerifyEmail/>}/>
      </Route>

      <Route element={<AuthenticatedLayout/>}>
      <Route path="/services" element={<Services/>}/>
      <Route path="/services/:type" element={<ServiceProviders/>}/>
      <Route path="/servicedetails/:id" element={<ServiceDetails/>}/>
      <Route path="/appointments" element={<Appointments/>}/>
      <Route path="/dashboard" element={<UserDashboard/>}/>
      <Route path="/profile-form" element={<ProfileForm/>}/>
      </Route>
   
    </Routes>
   
 </>
  )
}