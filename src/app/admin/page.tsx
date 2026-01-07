import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen, Star, FileText, Briefcase, Users, Handshake, HelpCircle } from "lucide-react";
import { team } from "@/lib/data.tsx";

const stats = [
    { title: "Services", value: "8", icon: BookOpen },
    { title: "Success Stories", value: "4", icon: Star },
    { title: "Blog Posts", value: "3", icon: FileText },
    { title: "Job Applications", value: "2", icon: Briefcase },
    { title: "Referrals", value: "3", icon: Handshake },
    { title: "FAQs", value: "5", icon: HelpCircle },
    { title: "Team Members", value: team.length.toString(), icon: Users },
]

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map(stat => (
            <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
