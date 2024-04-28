'use client';

import { NextPage } from "next";

interface ErrorPageProps {
    error: Error;
    reset: () => void;
}

const ErrorPage: NextPage<ErrorPageProps> = ({ error }: ErrorPageProps) => {
    return <div>{error.message}</div>;
}

export default ErrorPage;