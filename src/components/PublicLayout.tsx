import { useAuthStore } from "@/store/authStore";
import { Loader } from "lucide-react";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom"


const PublicLayout = () => {
  const { checkAuth, isAuthenticated,isCheckingAuth } = useAuthStore(); 

  useEffect(() => {
    // to check loged in or not
    checkAuth();
  }, [checkAuth]);

  // loading
  if (isCheckingAuth) {
    return <div className="w-full h-screen flex justify-center items-center">
      <Loader className="animate-spin" size={54}/>
    </div>; 
  }

  // redirect to login if not authenticated after the check
  if (isAuthenticated) {
    return <Navigate to="/services" replace />;
  }
  return (
    <div className="w-full h-screen">
      <Outlet />
    </div>
  )
}

export default PublicLayout