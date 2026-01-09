
'use client';

import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, MoreHorizontal, Trash2, Pencil, ExternalLink } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import Image from "next/image";
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
import { type Service } from "@/lib/types";

export default function AdminServicesPage() {
    const firestore = useFirestore();
    const { toast } = useToast();
    const servicesQuery = useMemoFirebase(() => query(collection(firestore, "services"), orderBy("createdAt", "desc")), [firestore]);
    const { data: services, isLoading } = useCollection<Service>(servicesQuery);

    const [dialogOpen, setDialogOpen] = useState(false);
    const [serviceToDelete, setServiceToDelete] = useState<string | null>(null);

    const handleDelete = async () => {
        if (!firestore || !serviceToDelete) return;
        const docRef = doc(firestore, "services", serviceToDelete);
        try {
            await deleteDoc(docRef);
            toast({ title: "Success", description: "Service deleted successfully." });
        } catch (error) {
            console.error("Error deleting document: ", error);
            toast({ variant: "destructive", title: "Error", description: "Could not delete service." });
        } finally {
            setDialogOpen(false);
            setServiceToDelete(null);
        }
    };


    return (
      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="font-headline">Services</CardTitle>
                        <CardDescription>Manage your consultancy services.</CardDescription>
                    </div>
                    <Button asChild size="sm">
                        <Link href="/admin/services/new">
                            <PlusCircle className="h-4 w-4 mr-2" />
                            Add Service
                        </Link>
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="hidden w-[100px] sm:table-cell">
                                <span className="sr-only">Image</span>
                            </TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && Array.from({ length: 3 }).map((_, i) => (
                            <TableRow key={i}>
                                <TableCell className="hidden sm:table-cell"><Skeleton className="aspect-square w-full rounded-md" /></TableCell>
                                <TableCell><Skeleton className="h-5 w-32" /></TableCell>
                                <TableCell><Skeleton className="h-5 w-64" /></TableCell>
                                <TableCell><Skeleton className="h-8 w-8" /></TableCell>
                            </TableRow>
                        ))}
                        {services && services.map(service => (
                            <TableRow key={service.id}>
                                <TableCell className="hidden sm:table-cell">
                                    <Image
                                        alt={service.title}
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src={service.imageUrl || "/placeholder.svg"}
                                        width="64"
                                    />
                                </TableCell>
                                <TableCell className="font-medium">{service.title}</TableCell>
                                <TableCell className="hidden md:table-cell">{service.shortDescription}</TableCell>
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
                                                <Link href={`/admin/services/edit/${service.id}`}><Pencil className="mr-2"/>Edit</Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link href={`/services/${service.slug}`} target="_blank"><ExternalLink className="mr-2"/>View</Link>
                                            </DropdownMenuItem>
                                           
                                            <DropdownMenuItem 
                                              className="text-red-500 focus:bg-red-50 focus:text-red-600" 
                                              onSelect={(e) => {
                                                e.preventDefault();
                                                setServiceToDelete(service.id);
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
                         {!isLoading && (!services || services.length === 0) && (
                            <TableRow>
                                <TableCell colSpan={4} className="h-24 text-center">
                                    No services found. <Link href="/admin/services/new" className="text-primary underline">Add one</Link> to get started.
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
                This action cannot be undone. This will permanently delete the service
                and remove its data from our servers.
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
