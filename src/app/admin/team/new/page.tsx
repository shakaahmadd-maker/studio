import { TeamMemberForm } from "@/components/forms/team-member-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NewTeamMemberPage() {
  return (
    <div className="max-w-2xl mx-auto">
        <Button asChild variant="ghost" className="mb-4">
              <Link href="/admin/team">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Team
              </Link>
        </Button>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Add a New Team Member</CardTitle>
            <CardDescription>Enter the details and upload a photo for the new team member.</CardDescription>
          </CardHeader>
          <CardContent>
            <TeamMemberForm />
          </CardContent>
        </Card>
    </div>
  );
}
