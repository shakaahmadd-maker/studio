
'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, MoreHorizontal, Trash2, Pencil, ExternalLink } from "lucide-react";
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
import { SuccessStory } from "@/lib/types";

export default function AdminStoriesPage() {
    const firestore = useFirestore();
    const { toast } = useToast();
    const storiesQuery = useMemoFirebase(() => query(collection(firestore, "success_stories"), orderBy("createdAt", "desc")), [firestore]);
    const { data: successStories, isLoading } = useCollection<SuccessStory>(storiesQuery);

    const [dialogOpen, setDialogOpen] = useState(false);
    const [storyToDelete, setStoryToDelete] = useState<string | null>(null);

    const handleDelete = async () => {
        if (!firestore || !storyToDelete) return;
        const docRef = doc(firestore, "success_stories", storyToDelete);
        try {
            await deleteDoc(docRef);
            toast({ title: "Success", description: "Story deleted successfully." });
        } catch (error) {
            console.error("Error deleting document: ", error);
            toast({ variant: "destructive", title: "Error", description: "Could not delete story." });
        } finally {
            setDialogOpen(false);
            setStoryToDelete(null);
        }
    };

    return (
      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="font-headline">Success Stories</CardTitle>
                        <CardDescription>Manage student success stories.</CardDescription>
                    </div>
                    <Button asChild size="sm">
                        <Link href="/admin/stories/new">
                            <PlusCircle className="h-4 w-4 mr-2" />
                            Add Story
                        </Link>
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="hidden w-[100px] sm:table-cell">Image</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>University</TableHead>
                            <TableHead><span className="sr-only">Actions</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                         {isLoading && Array.from({ length: 3 }).map((_, i) => (
                            <TableRow key={i}>
                                <TableCell className="hidden sm:table-cell"><Skeleton className="aspect-square w-[64px] rounded-md" /></TableCell>
                                <TableCell><Skeleton className="h-5 w-32" /></TableCell>
                                <TableCell><Skeleton className="h-5 w-48" /></TableCell>
                                <TableCell><Skeleton className="h-8 w-8" /></TableCell>
                            </TableRow>
                        ))}
                        {successStories && successStories.map(story => (
                            <TableRow key={story.id}>
                                <TableCell className="hidden sm:table-cell">
                                    <Image alt={story.name} className="aspect-square rounded-md object-cover" height="64" src={story.clientImageUrl} width="64" />
                                </TableCell>
                                <TableCell className="font-medium">{story.name}</TableCell>
                                <TableCell>{story.university}</TableCell>
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
                                                <Link href={`/admin/stories/edit/${story.id}`}><Pencil className="mr-2"/>Edit</Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link href={`/success-stories#${story.id}`} target="_blank"><ExternalLink className="mr-2"/>View</Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem 
                                              className="text-red-500 focus:bg-red-50 focus:text-red-600" 
                                              onSelect={(e) => {
                                                e.preventDefault();
                                                setStoryToDelete(story.id);
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
                        {!isLoading && (!successStories || successStories.length === 0) && (
                            <TableRow>
                                <TableCell colSpan={4} className="h-24 text-center">
                                    No stories found. <Link href="/admin/stories/new" className="text-primary underline">Add one</Link> to get started.
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
                This action cannot be undone. This will permanently delete this success story.
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
