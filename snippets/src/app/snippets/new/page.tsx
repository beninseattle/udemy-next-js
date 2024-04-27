import { redirect } from 'next/navigation';
import { db } from '@/db';

const SnippetCreatePage: React.FC = () => {
    async function createSnippet(formData: FormData) {
        'use server';

        const title = formData.get('title') as string;
        const code = formData.get('code') as string;

        const snippet = await db.snippet.create({
            data: {
                title,
                code
            }
        });
        console.log(snippet);

        redirect('/');
    }

    return (
        <form action={createSnippet}>
            <h3 className="font-bold m-3">Create a Snippet</h3>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label htmlFor="title" className="w-12">Title</label>
                    <input type="text" className="border rounded p-2 w-full" id="title" name="title" />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label htmlFor="code" className="w-12">Code</label>
                    <textarea className="border rounded p-2 w-full" id="code" name="code" />
                </div>
            </div>
            <button className="rounded p-2 bg-blue-200" type="submit">Create</button>
        </form>
    )
};

export default SnippetCreatePage;