import AppSideBar from "@/components/AppSideBar"
// import { Dashboard } from "@/components/Dashboard"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"
const UserDashboard = () => {
  return (
    <>
     <SidebarProvider>
    <AppSideBar />
    <main className="w-full overflow-hidden m-5">
      <SidebarTrigger />
   <Outlet/>
    </main>
  </SidebarProvider>
    </>
  )
}

export default UserDashboard