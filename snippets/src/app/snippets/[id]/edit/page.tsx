import { notFound } from "next/navigation";
import { db } from "@/db";
import SnippetEditForm from "@/components/snippet-edit-form";
import { NextPage } from "next";

interface SnipppetEditPageProps {
    params: {
        id: string
    }
}

const SnippetEditPage: NextPage<SnipppetEditPageProps> = async ({ params }) => {
    const id = Number.parseInt(params.id);

    const snippet = await db.snippet.findFirst({ where: { id }});
    if (!snippet) {
        return notFound();
    }

    return (
        <div>
            <SnippetEditForm snippet={snippet} />
        </div>
    );
}

export default SnippetEditPage;