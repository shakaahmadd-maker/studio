
'use client';

import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal, FileDown, Trash2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import type { Consultation } from "@/lib/types";

export default function AdminConsultationsPage() {
    const firestore = useFirestore();
    const consultationsQuery = useMemoFirebase(() => query(collection(firestore, "consultations"), orderBy("createdAt", "desc")), [firestore]);
    const { data: consultations, isLoading } = useCollection<Consultation>(consultationsQuery);

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="font-headline">Consultation Requests</CardTitle>
                        <CardDescription>Review and manage new student consultations.</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Program</TableHead>
                            <TableHead>Budget</TableHead>
                            <TableHead><span className="sr-only">Actions</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && Array.from({ length: 5 }).map((_, i) => (
                             <TableRow key={i}>
                                <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                                <TableCell><Skeleton className="h-5 w-32" /></TableCell>
                                <TableCell><Skeleton className="h-5 w-48" /></TableCell>
                                <TableCell><Skeleton className="h-6 w-20" /></TableCell>
                                <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                                <TableCell><Skeleton className="h-8 w-8" /></TableCell>
                            </TableRow>
                        ))}
                        {consultations && consultations.map(app => (
                            <TableRow key={app.id}>
                                <TableCell>{app.createdAt?.toDate().toLocaleDateString()}</TableCell>
                                <TableCell className="font-medium">{app.fullName}</TableCell>
                                <TableCell>{app.email}</TableCell>
                                <TableCell><Badge variant="outline" className="capitalize">{app.lookingFor}</Badge></TableCell>
                                <TableCell>{app.budget}</TableCell>
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
                                            {app.cvUrl && <DropdownMenuItem asChild><Link href={app.cvUrl} target="_blank" rel="noopener noreferrer"><FileDown className="mr-2 h-4 w-4" />Download CV</Link></DropdownMenuItem>}
                                            {app.transcriptsUrl && <DropdownMenuItem asChild><Link href={app.transcriptsUrl} target="_blank" rel="noopener noreferrer"><FileDown className="mr-2 h-4 w-4" />Download Transcripts</Link></DropdownMenuItem>}
                                            <DropdownMenuItem className="text-red-500" onSelect={() => alert("Delete not implemented")}>
                                                <Trash2 className="mr-2 h-4 w-4" />
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                        {!isLoading && (!consultations || consultations.length === 0) && (
                            <TableRow>
                                <TableCell colSpan={6} className="h-24 text-center">
                                    No consultation requests found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

    