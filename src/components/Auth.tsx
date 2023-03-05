"use client";

import { signIn, signOut } from "next-auth/react";
import Button from "./Button";
import Link from "./Link";

export const SignInHero = () => {
  return (
    <Button onClick={() => signIn("spotify")} icon="spotify">
      Login With Spotify
    </Button>
  );
};

export const LogInHeader = () => {
  return <Link onClick={() => signIn("spotify")}>Log In</Link>;
};

export const LogOutHeader = () => {
  return <Link onClick={() => signOut()}>Log Out</Link>;
};
