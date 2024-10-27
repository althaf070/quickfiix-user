import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";
import { Loader } from "lucide-react";

const AuthenticatedLayout = () => {
  const { checkAuth, isAuthenticated,isCheckingAuth } = useAuthStore(); 

  useEffect(() => {
    // to check logeed in or not
    checkAuth();
  }, [checkAuth]);

  // loading
  if (isCheckingAuth) {
    return <div className="w-full h-screen flex justify-center items-center">
      <Loader className="animate-spin" size={54}/>
    </div>; 
  }

  // Redirect to login if not authenticated after the check
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Render layout if authenticated
  return (
    <>
      {isAuthenticated && (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default AuthenticatedLayout;
