
'use client';

import Link from "next/link";
import { useState } from "react";
import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, MoreHorizontal, Trash2, Pencil, ExternalLink, MapPin } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { type JobOpening } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export default function AdminCareersPage() {
    const firestore = useFirestore();
    const { toast } = useToast();
    const jobsQuery = useMemoFirebase(() => query(collection(firestore, "job_openings"), orderBy("createdAt", "desc")), [firestore]);
    const { data: jobOpenings, isLoading } = useCollection<JobOpening>(jobsQuery);

    const [dialogOpen, setDialogOpen] = useState(false);
    const [jobToDelete, setJobToDelete] = useState<string | null>(null);

    const handleDelete = async () => {
        if (!firestore || !jobToDelete) return;
        const docRef = doc(firestore, "job_openings", jobToDelete);
        try {
            await deleteDoc(docRef);
            toast({ title: "Success", description: "Job opening deleted successfully." });
        } catch (error) {
            console.error("Error deleting document: ", error);
            toast({ variant: "destructive", title: "Error", description: "Could not delete job opening." });
        } finally {
            setDialogOpen(false);
            setJobToDelete(null);
        }
    };

    return (
      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="font-headline">Job Openings</CardTitle>
                        <CardDescription>Create and manage job openings.</CardDescription>
                    </div>
                    <Button asChild size="sm">
                        <Link href="/admin/careers/new">
                            <PlusCircle className="h-4 w-4 mr-2" />
                            New Opening
                        </Link>
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead><span className="sr-only">Actions</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && Array.from({ length: 3 }).map((_, i) => (
                            <TableRow key={i}>
                                <TableCell><Skeleton className="h-5 w-48" /></TableCell>
                                <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                                <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                                <TableCell><Skeleton className="h-8 w-8" /></TableCell>
                            </TableRow>
                        ))}
                        {jobOpenings && jobOpenings.map(job => (
                            <TableRow key={job.id}>
                                <TableCell className="font-medium">{job.title}</TableCell>
                                <TableCell><MapPin className="inline-block h-4 w-4 mr-1" />{job.location}</TableCell>
                                <TableCell><Badge variant="secondary">{job.type}</Badge></TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">Toggle menu</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem onSelect={() => alert("Edit functionality to be implemented.")}>
                                                <Pencil className="mr-2"/>Edit
                                            </DropdownMenuItem>
                                             <DropdownMenuItem asChild>
                                                <Link href={`/career#${job.id}`} target="_blank"><ExternalLink className="mr-2"/>View</Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem 
                                              className="text-red-500 focus:bg-red-50 focus:text-red-600" 
                                              onSelect={(e) => {
                                                e.preventDefault();
                                                setJobToDelete(job.id);
                                                setDialogOpen(true);
                                              }}
                                            >
                                                <Trash2 className="mr-2"/>Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                         {!isLoading && (!jobOpenings || jobOpenings.length === 0) && (
                            <TableRow>
                                <TableCell colSpan={4} className="h-24 text-center">
                                    No job openings found. <Link href="/admin/careers/new" className="text-primary underline">Create one</Link> to get started.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone. This will permanently delete this job opening.
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">Delete</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
}
