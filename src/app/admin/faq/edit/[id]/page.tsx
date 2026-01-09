
import { doc, getDoc } from "firebase/firestore";
import { notFound } from "next/navigation";
import { getSdks } from "@/firebase/server";
import { FaqForm } from "@/components/forms/faq-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { type FAQ } from "@/lib/types";

async function getFaq(id: string): Promise<FAQ | null> {
  const { firestore } = getSdks();
  const faqDoc = await getDoc(doc(firestore, "faqs", id));
  if (!faqDoc.exists()) {
    return null;
  }
  return { id: faqDoc.id, ...faqDoc.data() } as FAQ;
}

export default async function EditFaqPage({ params }: { params: { id: string } }) {
  const faq = await getFaq(params.id);

  if (!faq) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto">
        <Button asChild variant="ghost" className="mb-4">
              <Link href="/admin/faq">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to FAQs
              </Link>
        </Button>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Edit FAQ</CardTitle>
            <CardDescription>Update the question and answer.</CardDescription>
          </CardHeader>
          <CardContent>
            <FaqForm faq={faq} />
          </CardContent>
        </Card>
    </div>
  );
}
