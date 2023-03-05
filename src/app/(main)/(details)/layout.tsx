import { Header, Link } from "@/components";
import ThemeToggle from "@/components/ThemeToggle";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface MainLayoutProps {
  children?: ReactNode;
}

export default async function DetailsLayout({ children }: MainLayoutProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <main className="w-full">
      <aside className="py-6 px-4 w-[18rem] flex flex-col justify-between items-center min-h-[calc(100vh-6rem)] border-r border-neutral-200 dark:border-neutral-800">
        <nav className="flex flex-col gap-4 w-full">
          <Link icon="chart-bar" type="tertiary" textSize="sm">
            My Dashboard
          </Link>
          <Link icon="microphone" type="tertiary" textSize="sm">
            Top Artists
          </Link>
          <Link icon="rectangle-stack" type="tertiary" textSize="sm">
            Top Albums
          </Link>
          <Link icon="play" type="tertiary" textSize="sm">
            Top Tracks
          </Link>
        </nav>

        <ThemeToggle />
      </aside>
      {children}
    </main>
  );
}
