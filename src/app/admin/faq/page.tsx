
'use client';

import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, MoreHorizontal, Trash2, Pencil } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
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
} from "@/components/ui/alert-dialog"
import { useState } from "react";
import { type FAQ } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export default function AdminFaqPage() {
    const firestore = useFirestore();
    const { toast } = useToast();
    const faqsQuery = useMemoFirebase(() => query(collection(firestore, "faqs"), orderBy("question", "asc")), [firestore]);
    const { data: faqs, isLoading } = useCollection<FAQ>(faqsQuery);

    const [dialogOpen, setDialogOpen] = useState(false);
    const [faqToDelete, setFaqToDelete] = useState<string | null>(null);

    const handleDelete = async () => {
        if (!firestore || !faqToDelete) return;
        const docRef = doc(firestore, "faqs", faqToDelete);
        try {
            await deleteDoc(docRef);
            toast({ title: "Success", description: "FAQ deleted successfully." });
        } catch (error) {
            console.error("Error deleting document: ", error);
            toast({ variant: "destructive", title: "Error", description: "Could not delete FAQ." });
        } finally {
            setDialogOpen(false);
            setFaqToDelete(null);
        }
    };


    return (
      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="font-headline">FAQs</CardTitle>
                        <CardDescription>Manage your Frequently Asked Questions.</CardDescription>
                    </div>
                    <Button asChild size="sm">
                        <Link href="/admin/faq/new">
                            <PlusCircle className="h-4 w-4 mr-2" />
                            Add FAQ
                        </Link>
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Question</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && Array.from({ length: 3 }).map((_, i) => (
                            <TableRow key={i}>
                                <TableCell><Skeleton className="h-5 w-3/4" /></TableCell>
                                <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                                <TableCell><Skeleton className="h-8 w-8" /></TableCell>
                            </TableRow>
                        ))}
                        {faqs && faqs.map(faq => (
                            <TableRow key={faq.id}>
                                <TableCell className="font-medium">{faq.question}</TableCell>
                                <TableCell><Badge variant="secondary" className="capitalize">{faq.category}</Badge></TableCell>
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
                                             <DropdownMenuItem asChild>
                                                <Link href={`/admin/faq/edit/${faq.id}`}><Pencil className="mr-2"/>Edit</Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem 
                                              className="text-red-500 focus:bg-red-50 focus:text-red-600" 
                                              onSelect={(e) => {
                                                e.preventDefault();
                                                setFaqToDelete(faq.id);
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
                         {!isLoading && (!faqs || faqs.length === 0) && (
                            <TableRow>
                                <TableCell colSpan={3} className="h-24 text-center">
                                    No FAQs found. <Link href="/admin/faq/new" className="text-primary underline">Add one</Link> to get started.
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
                This action cannot be undone. This will permanently delete this FAQ.
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
