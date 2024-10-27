import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Appointments from "./pages/Appointments";
import ServiceProviders from "./pages/ServiceProviders";
import ProfileForm from "./pages/ProfileForm";
import PublicLayout from "./components/PublicLayout";
import AuthenticatedLayout from "./components/AuthenticatedLayout";
import MessagePage from "./pages/MessagePage";
import UserDashboard from "./components/DashboardLayout";
import { Dashboard } from "./pages/DashboardPage";
import Favourites from "./pages/Favourites";
import Settings from "./pages/Settings";
import Register from "./pages/Register";
import Login from "./pages/Login";

export default function App() {

 
  return (
 <>
    <Routes>
      <Route element={<PublicLayout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile-form" element={<ProfileForm/>}/>
      </Route>

      <Route element={<AuthenticatedLayout/>}>
      <Route path="/services" element={<Services/>}/>
      <Route path="/services/:type" element={<ServiceProviders/>}/>
      <Route path="/servicedetails/:id" element={<ServiceDetails/>}/>

      <Route element={<UserDashboard/>}>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/appointments" element={<Appointments/>}/>
      <Route path="/messages" element={<MessagePage/>}/>
      <Route path="/favourites" element={<Favourites/>}/>
      <Route path="/settings" element={<Settings/>}/>
      </Route>
      </Route>
   
    </Routes>
   
 </>
  )
}