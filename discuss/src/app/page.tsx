import { Button } from "@nextui-org/react";
import { signIn } from "@/actions";

export default function Home() {
  return (
    <div>
      <form action={signIn}>
        <Button type="submit">Log In</Button>
      </form>
    </div>
  );
}
