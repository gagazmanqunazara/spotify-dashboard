"use client";

import { Session } from "next-auth";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { LogInHeader, LogOutHeader } from "./Auth";
import Link from "./Link";
import ThemeToggle from "./ThemeToggle";
import UserDropdown from "./UserDropdown";

interface HeaderProps {
  session?: Session;
}

const Header: FC<HeaderProps> = ({ session }) => {
  const pathname = usePathname();

  return (
    <header
      className={`flex w-full items-center py-4 px-6 justify-between border-neutral-200 dark:border-neutral-800 ${
        session ? "border-b" : ""
      }`}
    >
      <img
        src="/images/logo.svg"
        alt="Logo Spotify Dashboard"
        className="h-7"
      />

      {session ? (
        <UserDropdown>
          <div className="py-1 pl-4 pr-1 border border-neutral-200 dark:border-neutral-800 rounded-full flex items-center gap-2 cursor-pointer">
            <p className="text-xs text-dark dark:text-light">
              {session?.user?.name || "User"}
            </p>
            <div className="bg-neutral-300 h-7 w-7 rounded-full"></div>
          </div>
        </UserDropdown>
      ) : (
        <div className="flex items-center gap-12">
          <nav className="flex gap-8 items-center">
            <Link type="secondary">Features</Link>
            <Link type="secondary" icon="chevron-down">
              Stack
            </Link>
            <LogInHeader />
          </nav>
          <ThemeToggle />
        </div>
      )}
    </header>
  );
};

export default Header;
