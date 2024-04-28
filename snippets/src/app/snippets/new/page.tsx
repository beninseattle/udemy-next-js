'use client';

import { useFormState } from 'react-dom';
import { createSnippet } from '@/actions';
import { NextPage } from 'next';

const SnippetCreatePage: NextPage = () => {
    const [formState, action] = useFormState(createSnippet, { message: '' });
    return (
        <form action={action}>
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
            {
                formState.message ? <div className='m-2 p-2 bg-red-200 border rounded border-red-400'>{formState.message}</div> : null
            }
            <button className="rounded p-2 bg-blue-200" type="submit">Create</button>
        </form>
    )
};

export default SnippetCreatePage;