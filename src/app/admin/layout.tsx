
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
import { Home, BookOpen, Star, FileText, Briefcase, Handshake, HelpCircle, PanelLeft, MessageSquareQuote, Users, Building2, Mail, MapPin, LogOut, Loader2, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAuth, useUser } from "@/firebase";
import { signOut } from "firebase/auth";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

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
    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

    useEffect(() => {
        // Wait until Firebase has finished its initial auth check.
        if (isUserLoading) {
            return;
        }

        // If no user is logged in, redirect to the login page.
        if (!user) {
            router.replace('/login');
            return;
        }

        // If there is a user, check for the admin custom claim.
        // Force a token refresh to ensure we have the latest claims.
        user.getIdTokenResult(true)
            .then((idTokenResult) => {
                // Check if the 'isAdmin' claim is true.
                if (!!idTokenResult.claims.isAdmin) {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false); // User is authenticated but not an admin.
                }
            })
            .catch((error) => {
                console.error("Error fetching user claims:", error);
                setIsAdmin(false); // On error, deny access.
            });

    }, [user, isUserLoading, router]);

    // While checking auth state or claims, show a full-screen loader.
    if (isUserLoading || isAdmin === null) {
        return (
            <div className="flex h-screen w-full items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }
    
    // If the user is authenticated but not an admin, show permission denied.
    if (isAdmin === false) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-muted/30 p-4">
                 <Card className="w-full max-w-md text-center">
                    <CardHeader>
                        <div className="mx-auto bg-destructive/10 p-4 rounded-full w-fit">
                            <ShieldAlert className="h-10 w-10 text-destructive" />
                        </div>
                        <CardTitle className="font-headline text-2xl">Permission Denied</CardTitle>
                        <CardDescription>You do not have the necessary permissions to access the admin dashboard.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                            Please contact the site administrator if you believe this is a mistake. You may need to have an admin role assigned to your account.
                        </p>
                         <Button asChild>
                            <Link href="/">Go to Homepage</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // If the user is authenticated and is an admin, render the admin content.
    return <>{children}</>;
}


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
      <SidebarProvider>
        <AuthWrapper>
            <div className="flex min-h-screen bg-background">
            <AdminSidebar />
            <SidebarInset className="flex-1 p-4 md:p-8 bg-muted/30">
                {children}
            </SidebarInset>
            </div>
        </AuthWrapper>
      </SidebarProvider>
  );
}
