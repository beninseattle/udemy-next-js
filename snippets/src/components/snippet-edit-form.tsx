'use client';

import { startTransition, useState } from "react";
import type { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { editSnippet } from "@/actions";

interface SnippetEditFormProps {
    snippet: Snippet
}

const SnippetEditForm: React.FC<SnippetEditFormProps> = ({ snippet }) => {
    const [code, setCode] = useState(snippet.code);

    const handleEditorChange = (value: string = "") => {
        setCode(value);
    };

    const handleSubmit = () => {
        startTransition(async () => {
            await editSnippet(snippet.id, code);
        });
    };

    return (
        <div>
            <Editor
                height="40vh"
                theme="vs-dark"
                language="javascript"
                defaultValue={code}
                options={{ minimap: { enabled: false }}}
                onChange={handleEditorChange}
            />
            <button className="p-2 border rounded" onClick={handleSubmit}>Save</button>
        </div>
    )
}

export default SnippetEditForm;