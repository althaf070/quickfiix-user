import { Calendar, Home, Inbox, Settings,MessageSquareQuote } from "lucide-react"
 
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"
import { GiRoyalLove } from "react-icons/gi"
import { MdDashboard } from "react-icons/md"
import { useAuthStore } from "@/store/authStore"

 
// Menu items.
const items = [
  {
    title: "Home",
    url: "/services",
    icon: Home,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: MdDashboard,
  },
  {
    title: "Inbox",
    url: "/messages",
    icon: Inbox,
  },
  {
    title: "My Appointments",
    url: "/appointments",
    icon: Calendar,
  },
  {
    title: "Used Services",
    url: "/used-services",
    icon: GiRoyalLove,
  },
  {
    title: "Reviews",
    url: "/reviews",
    icon: MessageSquareQuote,
  },

  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]
const AppSideBar = () => {
const {logout} = useAuthStore()
const handleLogout = () => {
  logout();
}
  return (
    <Sidebar>
    <SidebarContent className="bg-primarygrey text-offwhite">
      <SidebarGroup>
        <SidebarGroupLabel className="text-silver">DashBoard</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter className="bg-primarydarkgrey">
        <Button variant={"destructive"} onClick={handleLogout}>Logout</Button>
    </SidebarFooter>
  </Sidebar>
  )
}

export default AppSideBar