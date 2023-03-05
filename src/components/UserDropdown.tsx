import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";
import { LogOutHeader } from "./Auth";
import ThemeToggle from "./ThemeToggle";

const UserDropdown = ({ children }: { children: ReactNode }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[20rem] bg-light dark:bg-dark rounded-md p-3 border border-neutral-200 dark:border-neutral-800"
          sideOffset={5}
          align={"end"}
        >
          <DropdownMenu.Item
            className="flex justify-center hover:outline-none"
            onSelect={(e) => e.preventDefault()}
          >
            <ThemeToggle />
          </DropdownMenu.Item>

          <DropdownMenu.DropdownMenuSeparator className="h-[1px] bg-neutral-200 dark:bg-neutral-800 my-3" />

          <DropdownMenu.Item
            className="hover:outline-none"
            onSelect={(e) => e.preventDefault()}
          >
            <LogOutHeader />
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="fill-neutral-200 dark:fill-neutral-800" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default UserDropdown;
