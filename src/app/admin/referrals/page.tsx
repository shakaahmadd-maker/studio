
'use client';

import { useState } from "react";
import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy, doc, updateDoc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import type { Referral } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

export default function AdminReferralsPage() {
    const firestore = useFirestore();
    const { toast } = useToast();
    const referralsQuery = useMemoFirebase(() => query(collection(firestore, "referrals"), orderBy("createdAt", "desc")), [firestore]);
    const { data: referrals, isLoading } = useCollection<Referral>(referralsQuery);

    const handleStatusUpdate = async (id: string, status: 'Pending' | 'Contacted' | 'Enrolled') => {
        if (!firestore) return;
        const docRef = doc(firestore, "referrals", id);
        try {
            await updateDoc(docRef, { status });
            toast({ title: "Status Updated", description: `Referral status changed to ${status}.` });
        } catch (error) {
            console.error("Error updating status: ", error);
            toast({ variant: "destructive", title: "Error", description: "Could not update status." });
        }
    };

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="font-headline">Referrals</CardTitle>
                        <CardDescription>Manage user referrals and commissions.</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Referrer</TableHead>
                            <TableHead>Referee</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead><span className="sr-only">Actions</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && Array.from({ length: 3 }).map((_, i) => (
                            <TableRow key={i}>
                                <TableCell><Skeleton className="h-5 w-32" /></TableCell>
                                <TableCell><Skeleton className="h-5 w-32" /></TableCell>
                                <TableCell><Skeleton className="h-6 w-20" /></TableCell>
                                <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                                <TableCell><Skeleton className="h-8 w-8" /></TableCell>
                            </TableRow>
                        ))}
                        {referrals && referrals.map(ref => (
                            <TableRow key={ref.id}>
                                <TableCell className="font-medium">{ref.referrerName} <br/> <span className="text-xs text-muted-foreground">{ref.referrerEmail}</span></TableCell>
                                <TableCell>{ref.refereeName} <br/> <span className="text-xs text-muted-foreground">{ref.refereeEmail} | {ref.refereePhone}</span></TableCell>
                                <TableCell>
                                    <Badge 
                                        variant={
                                            ref.status === 'Enrolled' ? 'default' : 
                                            ref.status === 'Pending' ? 'destructive' : 'secondary'
                                        }
                                        className={
                                             ref.status === 'Enrolled' ? 'bg-green-600 text-white' : ''
                                        }
                                    >
                                        {ref.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{ref.createdAt.toDate().toLocaleDateString()}</TableCell>
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
                                            <DropdownMenuItem onSelect={() => handleStatusUpdate(ref.id, 'Contacted')}>Mark as Contacted</DropdownMenuItem>
                                            <DropdownMenuItem onSelect={() => handleStatusUpdate(ref.id, 'Enrolled')}>Mark as Enrolled</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                        {!isLoading && (!referrals || referrals.length === 0) && (
                             <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center">
                                    No referrals found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
