import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const referrals = [
    { referrerName: "Ravi Kumar", refereeName: "Sita Devi", status: "Pending", date: "2024-07-21" },
    { referrerName: "Priya Sharma", refereeName: "Amit Singh", status: "Enrolled", date: "2024-07-18" },
    { referrerName: "Sunil Gupta", refereeName: "Anjali Mehta", status: "Contacted", date: "2024-07-15" },
];

export default function AdminReferralsPage() {
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
                        {referrals.map(ref => (
                            <TableRow key={ref.refereeName}>
                                <TableCell className="font-medium">{ref.referrerName}</TableCell>
                                <TableCell>{ref.refereeName}</TableCell>
                                <TableCell>
                                    <Badge 
                                        variant={
                                            ref.status === 'Enrolled' ? 'default' : 
                                            ref.status === 'Pending' ? 'destructive' : 'secondary'
                                        }
                                        className={
                                             ref.status === 'Enrolled' ? 'bg-green-500' : ''
                                        }
                                    >
                                        {ref.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{ref.date}</TableCell>
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
                                            <DropdownMenuItem>Mark as Contacted</DropdownMenuItem>
                                            <DropdownMenuItem>Mark as Enrolled</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
