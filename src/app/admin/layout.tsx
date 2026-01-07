import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Home, BookOpen, Star, FileText, Briefcase, Handshake, HelpCircle, PanelLeft, MessageSquareQuote, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminSidebar = () => {
    return (
        <Sidebar>
            <SidebarHeader>
                 <Button variant="ghost" size="icon" className="md:hidden">
                    <PanelLeft />
                </Button>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="/admin" tooltip="Dashboard">
                            <Home />
                            <span>Dashboard</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <SidebarMenuButton href="/admin/consultations" tooltip="Consultations">
                            <MessageSquareQuote />
                            <span>Consultations</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="/admin/services" tooltip="Services">
                            <BookOpen />
                            <span>Services</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="/admin/stories" tooltip="Success Stories">
                            <Star />
                            <span>Success Stories</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="/admin/blog" tooltip="Blog">
                            <FileText />
                            <span>Blog</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <SidebarMenuButton href="/admin/careers" tooltip="Careers">
                            <Briefcase />
                            <span>Careers</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <SidebarMenuButton href="/admin/referrals" tooltip="Referrals">
                            <Handshake />
                            <span>Referrals</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <SidebarMenuButton href="/admin/faq" tooltip="FAQ">
                            <HelpCircle />
                            <span>FAQ</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="/admin/team" tooltip="Team">
                            <Users />
                            <span>Team</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    )
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <AdminSidebar />
        <SidebarInset className="flex-1 p-4 md:p-8 bg-muted/30">
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
