
'use client';

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Home, BookOpen, Star, FileText, Briefcase, Handshake, HelpCircle, PanelLeft, MessageSquareQuote, Users, Building2, Mail, MapPin, LogOut, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAuth, useUser } from "@/firebase";
import { signOut } from "firebase/auth";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const AdminSidebar = () => {
    const auth = useAuth();
    const router = useRouter();
    const { toast } = useToast();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            toast({ title: 'Signed Out', description: 'You have been successfully signed out.' });
            router.push('/login');
        } catch (error) {
            console.error("Sign out error", error);
            toast({ variant: 'destructive', title: 'Error', description: 'Failed to sign out.' });
        }
    }

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
                        <SidebarMenuButton href="/admin/contacts" tooltip="Contact Messages">
                            <Mail />
                            <span>Contact Messages</span>
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
                     <SidebarMenuItem>
                        <SidebarMenuButton href="/admin/universities" tooltip="Universities">
                            <Building2 />
                            <span>Universities</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <SidebarMenuButton href="/admin/locations" tooltip="Locations">
                            <MapPin />
                            <span>Locations</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
             <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={handleSignOut} tooltip="Sign Out">
                            <LogOut />
                            <span>Sign Out</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}

function AuthWrapper({ children }: { children: React.ReactNode }) {
    const { user, isUserLoading } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!isUserLoading && !user) {
            router.push('/login');
        }
    }, [user, isUserLoading, router]);

    if (isUserLoading || !user) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    return <>{children}</>;
}


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthWrapper>
      <SidebarProvider>
        <div className="flex min-h-screen bg-background">
          <AdminSidebar />
          <SidebarInset className="flex-1 p-4 md:p-8 bg-muted/30">
            {children}
          </SidebarInset>
        </div>
      </SidebarProvider>
    </AuthWrapper>
  );
}
