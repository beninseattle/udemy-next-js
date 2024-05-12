'use client';

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return (<div>From client: user is signed in<br />
      <code>{JSON.stringify(session.data.user)}</code></div>);
  }

  return <div>From client: user is NOT signed in</div>;
}