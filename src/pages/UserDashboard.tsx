import AppSideBar from "@/components/AppSideBar"
import { Dashboard } from "@/components/Dashboard"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
const UserDashboard = () => {
  return (
    <>
     <SidebarProvider>
    <AppSideBar />
    <main className="w-full overflow-hidden">
      <SidebarTrigger />
   <Dashboard/>
    </main>
  </SidebarProvider>
    </>
  )
}

export default UserDashboard