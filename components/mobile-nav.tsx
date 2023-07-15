import * as React from "react";
import {MainNavItem} from "types";

import {cn} from "@/lib/utils";
import {useLockBody} from "@/hooks/use-lock-body";

interface MobileNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
}

export function MobileNav({items, children}: MobileNavProps) {
  useLockBody();

  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div
      className={cn(
        !isOpen ? "hidden" : "block",
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto px-4 shadow-md animate-in slide-in-from-bottom-80 md:hidden",
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <a
              key={index}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60",
              )}
              href={item.disabled ? "#" : item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
}
