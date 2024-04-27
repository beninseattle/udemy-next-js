import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/db";
import React from "react"
import { deleteSnippet } from "@/actions";

interface SnippetShowPageProps {
    params: {
        id: string;
    }
}

const SnippetShowPage: React.FC<SnippetShowPageProps> = async ({ params: { id } }) => {
    const snippet = await db.snippet.findFirst({ where: { id: parseInt(id) } });
    if (!snippet) {
        return notFound();
    }

    const deleteSnippetAction = deleteSnippet.bind(null, snippet.id);
    return (
        <div>
            <div className="flex m-4 justify-between items-center">
                <h1 className="text-xl font-bold">{snippet.title}</h1>
                <div className="flex gap-4">
                    <Link href={`/snippets/${snippet.id}/edit`} className="p-2 border rounded">Edit</Link>
                    <form action={deleteSnippetAction}>
                        <button className="p-2 border rounded">Delete</button>
                    </form>
                </div>
            </div>
            <pre className="p-3 border rounded bg-gray-200 border-gray-200">{snippet.code}</pre>
        </div >
    )
}

export default SnippetShowPage