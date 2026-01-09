
'use client';

import { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { signInAnonymously, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useAuth, useUser } from '@/firebase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, AlertTriangle, ExternalLink, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object({
  email: z.string().optional(),
  password: z.string().optional(),
});

type LoginFormValues = z.infer<typeof formSchema>;

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px" {...props}>
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.99,35.536,44,30.169,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
    </svg>
);


export default function LoginPage() {
  const { toast } = useToast();
  const auth = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, isUserLoading } = useUser();
  
  const [error, setError] = useState<string | null>(null);
  const [authDomainUrl, setAuthDomainUrl] = useState<string | null>(null);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: 'admin',
      password: '●●●●●●●●',
    },
  });

  useEffect(() => {
    // If the user is already logged in, the middleware will redirect them.
    // This effect handles the case where the user lands on the login page
    // and is already authenticated on the client.
    if (!isUserLoading && user) {
        const nextUrl = searchParams.get('next') || '/admin';
        router.replace(nextUrl);
    }

    // Check for auth domain error from query params
    const authDomainError = searchParams.get('authDomainUrl');
    if (authDomainError) {
      setAuthDomainUrl(decodeURIComponent(authDomainError));
    }
  }, [isUserLoading, user, router, searchParams]);


  async function handleAnonymousSignIn() {
    setError(null);
    try {
      await signInAnonymously(auth);
      toast({
        title: 'Login Successful!',
        description: 'Redirecting you to the admin dashboard.',
      });
      // The redirect is now handled by the middleware and useEffect hook
    } catch (error: any) {
      console.error('Anonymous Sign In Error:', error);
      setError('An unexpected error occurred during sign-in. Please try again.');
    }
  }

  const handleGoogleSignIn = async () => {
    setError(null);
    const provider = new GoogleAuthProvider();
    try {
        await signInWithPopup(auth, provider);
        toast({
            title: 'Login Successful!',
            description: 'Redirecting you to the admin dashboard.',
        });
        // The redirect is now handled by the middleware and useEffect hook
    } catch (error: any) {
        console.error('Google Sign In Error:', error);
        let errorMessage = 'Could not sign in with Google. Please try again.';
        if (error.code === 'auth/popup-closed-by-user') {
            return; 
        }
        if (error.code === 'auth/account-exists-with-different-credential') {
            errorMessage = 'An account with this email already exists using a different sign-in method.';
        }
        setError(errorMessage);
    }
  }

  if (isUserLoading || user) {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
    );
  }


  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex items-center justify-center">
                 <GraduationCap className="h-10 w-10 text-primary" />
            </div>
          <CardTitle className="font-headline text-2xl">Admin Login</CardTitle>
          <CardDescription>Enter your credentials to access the dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
            {error && (
                <Alert variant="destructive" className="mb-4">
                    <AlertTitle>Login Failed</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
             {authDomainUrl && (
              <Alert variant="destructive" className="mb-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Action Required</AlertTitle>
                <AlertDescription>
                  To enable Google Sign-In, you must authorize your application's domain.
                  <Button asChild variant="link" className="p-0 h-auto ml-1">
                    <Link href={authDomainUrl} target="_blank">
                      Click here to authorize <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </AlertDescription>
              </Alert>
            )}
            <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={form.formState.isSubmitting}>
                <GoogleIcon className="mr-2 h-5 w-5" />
                Sign in with Google
            </Button>
            <div className="my-4 flex items-center">
                <Separator className="flex-1" />
                <span className="mx-4 text-xs text-muted-foreground">OR</span>
                <Separator className="flex-1" />
            </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleAnonymousSignIn)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="admin@example.com" 
                        {...field}
                        readOnly
                       />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} readOnly/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
