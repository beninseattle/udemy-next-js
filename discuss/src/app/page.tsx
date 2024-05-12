import { Button } from "@nextui-org/react";
import { signIn, signOut } from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return (
      <div>
        <form action={signOut}>
          <Button type="submit">Sign Out</Button>
        </form>
        <Profile />
      </div>
    );
  } else {
    return (
      <div>
        <form action={signIn}>
          <Button type="submit">Sign In</Button>
        </form>
        <Profile />
      </div>
    );
  }
}
