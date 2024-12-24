import { Search, Heart, Home, Calendar, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";

const menuItems = [
  { icon: Search, label: "Explorer", path: "/explorer" },
  { icon: Heart, label: "Favoris", path: "/favoris" },
  { icon: Home, label: "Accueil", path: "/" },
  { icon: Calendar, label: "Voyages", path: "/voyages" },
  { icon: Settings, label: "Profil", path: "/profile" },
];

const Sidebar = () => {
  return (
    <div className="hidden md:block">
      <SidebarProvider>
        <ShadcnSidebar className="border-r border-gray-200">
          <SidebarContent>
            <div className="p-4">
              <img src="/lovable-uploads/0f1cbc49-48c7-425c-9620-cf793e1daccf.png" alt="Logo" className="w-12 h-12" />
            </div>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.path}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-lg"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </ShadcnSidebar>
      </SidebarProvider>
    </div>
  );
};

export default Sidebar;