import { SessionProvider } from "next-auth/react";
import { BASE_URL, auth } from "@/auth";

import AuthButtonClient from "./AuthButton.Client";

export default async function AuthButtonServer() {
  const session = await auth();

  if (session && session.user) {
    session.user = {
      name: session.user.name,
      email: session.user.email,
    };
  }

  return (
    <SessionProvider basePath={BASE_URL} session={session}>
      <AuthButtonClient />
    </SessionProvider>
  );
}
