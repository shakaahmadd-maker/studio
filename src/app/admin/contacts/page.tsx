
'use client';

import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import type { Contact } from "@/lib/types";

export default function AdminContactsPage() {
    const firestore = useFirestore();
    const contactsQuery = useMemoFirebase(() => query(collection(firestore, "contacts"), orderBy("createdAt", "desc")), [firestore]);
    const { data: contacts, isLoading } = useCollection<Contact>(contactsQuery);

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="font-headline">Contact Messages</CardTitle>
                        <CardDescription>View messages submitted through the contact form.</CardDescription>
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
                            <TableHead>Message</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && Array.from({ length: 5 }).map((_, i) => (
                            <TableRow key={i}>
                                <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                                <TableCell><Skeleton className="h-5 w-32" /></TableCell>
                                <TableCell><Skeleton className="h-5 w-48" /></TableCell>
                                <TableCell><Skeleton className="h-5 w-64" /></TableCell>
                            </TableRow>
                        ))}
                        {contacts && contacts.map(contact => (
                            <TableRow key={contact.id}>
                                <TableCell className="font-medium">{contact.createdAt.toDate().toLocaleDateString()}</TableCell>
                                <TableCell>{contact.name}</TableCell>
                                <TableCell>{contact.email}</TableCell>
                                <TableCell className="whitespace-pre-wrap">{contact.message}</TableCell>
                            </TableRow>
                        ))}
                         {!isLoading && (!contacts || contacts.length === 0) && (
                            <TableRow>
                                <TableCell colSpan={4} className="h-24 text-center">
                                    No messages found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
