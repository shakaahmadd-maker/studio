
'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, MoreHorizontal, Trash2 } from "lucide-react";
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
import type { University } from "@/lib/types";

export default function AdminUniversitiesPage() {
    const firestore = useFirestore();
    const { toast } = useToast();
    const universitiesQuery = useMemoFirebase(() => query(collection(firestore, "universities"), orderBy("createdAt", "desc")), [firestore]);
    const { data: universities, isLoading } = useCollection<University>(universitiesQuery);

    const [dialogOpen, setDialogOpen] = useState(false);
    const [universityToDelete, setUniversityToDelete] = useState<string | null>(null);

    const handleDelete = async () => {
        if (!firestore || !universityToDelete) return;
        const docRef = doc(firestore, "universities", universityToDelete);
        try {
            await deleteDoc(docRef);
            toast({ title: "Success", description: "University deleted successfully." });
        } catch (error) {
            console.error("Error deleting document: ", error);
            toast({ variant: "destructive", title: "Error", description: "Could not delete university." });
        } finally {
            setDialogOpen(false);
            setUniversityToDelete(null);
        }
    };

    return (
      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="font-headline">University Partners</CardTitle>
                        <CardDescription>Manage university logos for the homepage slider.</CardDescription>
                    </div>
                    <Button asChild size="sm">
                        <Link href="/admin/universities/new">
                            <PlusCircle className="h-4 w-4 mr-2" />
                            New University
                        </Link>
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="hidden w-[100px] sm:table-cell">Logo</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead><span className="sr-only">Actions</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && Array.from({ length: 3 }).map((_, i) => (
                            <TableRow key={i}>
                                <TableCell><Skeleton className="h-16 w-24" /></TableCell>
                                <TableCell><Skeleton className="h-5 w-48" /></TableCell>
                                <TableCell><Skeleton className="h-8 w-8" /></TableCell>
                            </TableRow>
                        ))}
                        {universities && universities.map(uni => (
                            <TableRow key={uni.id}>
                                <TableCell className="hidden sm:table-cell p-2">
                                    {uni.logoUrl && <Image alt={uni.name} className="aspect-video rounded-md object-contain p-1 bg-white" height="64" src={uni.logoUrl} width="128" />}
                                </TableCell>
                                <TableCell className="font-medium">{uni.name}</TableCell>
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
                                            <DropdownMenuItem 
                                              className="text-red-500 focus:bg-red-50 focus:text-red-600"
                                              onSelect={(e) => {
                                                e.preventDefault();
                                                setUniversityToDelete(uni.id);
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
                         {!isLoading && (!universities || universities.length === 0) && (
                            <TableRow>
                                <TableCell colSpan={3} className="h-24 text-center">
                                    No universities found. <Link href="/admin/universities/new" className="text-primary underline">Add one</Link> to get started.
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
                This action cannot be undone. This will permanently delete this university partner.
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
