import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Appointments from "./pages/Appointments";
import ServiceProviders from "./pages/ServiceProviders";
import PublicLayout from "./components/PublicLayout";
import AuthenticatedLayout from "./components/AuthenticatedLayout";
import MessagePage from "./pages/MessagePage";
import UserDashboard from "./components/DashboardLayout";
import { Dashboard } from "./pages/DashboardPage";
import Settings from "./pages/Settings";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UsedServices from "./pages/UsedServices";
import MyReviewPage from "./pages/MyReviewPage";

export default function App() {

 
  return (
 <>
    <Routes>
      <Route element={<PublicLayout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      </Route>

      <Route element={<AuthenticatedLayout/>}>
      <Route path="/services" element={<Services/>}/>
      <Route path="/services/:type" element={<ServiceProviders/>}/>
      <Route path="/servicedetails/:id" element={<ServiceDetails/>}/>

      <Route element={<UserDashboard/>}>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/used-services" element={<UsedServices/>}/>
      <Route path="/appointments" element={<Appointments/>}/>
      <Route path="/messages" element={<MessagePage/>}/>
      <Route path="/reviews" element={<MyReviewPage/>}/>
      <Route path="/settings" element={<Settings/>}/>
      </Route>
      </Route>
   
    </Routes>
   
 </>
  )
}