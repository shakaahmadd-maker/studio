
'use client';

import { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { signInAnonymously, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import dynamic from 'next/dynamic';

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
import { Skeleton } from '@/components/ui/skeleton';


const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
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


function LoginForm() {
  const { toast } = useToast();
  const auth = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, isUserLoading } = useUser();
  
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authDomainUrl, setAuthDomainUrl] = useState<string | null>(null);
  const [oauthConsentUrl, setOauthConsentUrl] = useState<string | null>(null);


  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    if (!isUserLoading && user) {
        const nextUrl = searchParams.get('next') || '/admin';
        router.replace(nextUrl);
    }

    const authDomainError = searchParams.get('authDomainUrl');
    if (authDomainError) {
      setAuthDomainUrl(decodeURIComponent(authDomainError));
    }
  }, [isUserLoading, user, router, searchParams]);

  async function handleEmailSignIn(values: LoginFormValues) {
    setError(null);
    setAuthDomainUrl(null);
    setOauthConsentUrl(null);
    setIsSubmitting(true);
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      toast({
        title: 'Login Successful!',
        description: 'Redirecting you to the admin dashboard.',
      });
    } catch (error: any) {
      console.error('Firebase Login Error:', error);
      let errorMessage = 'An unexpected error occurred. Please try again.';
      switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
          errorMessage = 'Invalid email or password. Please check your credentials and try again.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'The email address is not valid. Please enter a valid email.';
          break;
        case 'auth/user-disabled':
          errorMessage = 'This user account has been disabled.';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Please check your internet connection and try again.';
          break;
        default:
          errorMessage = `Login Failed: ${error.message}`;
          break;
      }
      setError(errorMessage);
    } finally {
        setIsSubmitting(false);
    }
  }


  async function handleAnonymousSignIn() {
    setError(null);
    setAuthDomainUrl(null);
    setOauthConsentUrl(null);
    setIsSubmitting(true);
    try {
      await signInAnonymously(auth);
      toast({
        title: 'Login Successful!',
        description: 'Redirecting you to the admin dashboard.',
      });
    } catch (error: any) {
      console.error('Anonymous Sign In Error:', error);
      setError('An unexpected error occurred during guest sign-in. Please try again.');
    } finally {
        setIsSubmitting(false);
    }
  }

  const handleGoogleSignIn = async () => {
    setError(null);
    setAuthDomainUrl(null);
    setOauthConsentUrl(null);
    setIsSubmitting(true);
    const provider = new GoogleAuthProvider();
    try {
        await signInWithPopup(auth, provider);
        toast({
            title: 'Login Successful!',
            description: 'Redirecting you to the admin dashboard.',
        });
    } catch (error: any) {
        console.error('Google Sign In Error:', error);
        let errorMessage = `Login Failed: ${error.message}`;
        if (error.code === 'auth/popup-closed-by-user') {
            setIsSubmitting(false);
            return; 
        }
        if (error.code === 'auth/account-exists-with-different-credential') {
            errorMessage = 'An account with this email already exists using a different sign-in method.';
        }
        if (error.code === 'auth/operation-not-allowed') {
            const consentUrl = `https://console.cloud.google.com/apis/credentials/consent?project=${auth.app.options.projectId}`;
            setOauthConsentUrl(consentUrl);
            errorMessage = 'Google Sign-In is not enabled. Please configure the OAuth consent screen in your Google Cloud project.';
        }
        if (error.code === 'auth/auth-domain-config-required') {
            const currentUrl = new URL(window.location.href);
            const authDomainUrl = `https://console.firebase.google.com/project/${auth.app.options.projectId}/authentication/providers`;
            currentUrl.searchParams.set('authDomainUrl', encodeURIComponent(authDomainUrl));
            window.location.href = currentUrl.toString();
            return;
        }
        setError(errorMessage);
    } finally {
        setIsSubmitting(false);
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
             {oauthConsentUrl && (
              <Alert variant="destructive" className="mb-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Action Required</AlertTitle>
                <AlertDescription>
                  To enable Google Sign-In, you must configure your OAuth consent screen.
                  <Button asChild variant="link" className="p-0 h-auto ml-1">
                    <Link href={oauthConsentUrl} target="_blank">
                      Click here to configure it <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </AlertDescription>
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
            <div className="grid grid-cols-1 gap-2">
                <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={isSubmitting}>
                    <GoogleIcon className="mr-2 h-5 w-5" />
                    Sign in with Google
                </Button>
                 <Button variant="secondary" className="w-full" onClick={handleAnonymousSignIn} disabled={isSubmitting}>
                    Sign in as Guest
                </Button>
            </div>
            <div className="my-4 flex items-center">
                <Separator className="flex-1" />
                <span className="mx-4 text-xs text-muted-foreground">OR</span>
                <Separator className="flex-1" />
            </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleEmailSignIn)} className="space-y-4">
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
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Sign In'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
  );
}

const DynamicLoginForm = dynamic(() => Promise.resolve(LoginForm), {
  ssr: false,
  loading: () => (
    <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex items-center justify-center">
                 <Skeleton className="h-10 w-10 rounded-full" />
            </div>
          <Skeleton className="h-7 w-40 mx-auto" />
          <Skeleton className="h-5 w-60 mx-auto mt-2" />
        </CardHeader>
        <CardContent className="space-y-4">
            <Skeleton className="h-10 w-full" />
             <Skeleton className="h-10 w-full" />
            <div className="my-4 flex items-center">
                <Skeleton className="h-px flex-1" />
                <Skeleton className="h-3 w-8 mx-4" />
                <Skeleton className="h-px flex-1" />
            </div>
             <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-10 w-full" />
             </div>
             <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-10 w-full" />
             </div>
            <Skeleton className="h-10 w-full" />
        </CardContent>
    </Card>
  )
});


export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 p-4">
      <DynamicLoginForm />
    </div>
  );
}
