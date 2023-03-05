import { Header, Link } from "@/components";
import ThemeToggle from "@/components/ThemeToggle";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface MainLayoutProps {
  children?: ReactNode;
}

export default async function MainLayout({ children }: MainLayoutProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <Header session={session} />
      <main className="w-full">{children}</main>
    </div>
  );
}
