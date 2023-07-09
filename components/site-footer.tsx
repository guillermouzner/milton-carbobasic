import * as React from "react";

import {cn} from "@/lib/utils";
import {Icons} from "@/components/icons";
import {ModeToggle} from "@/components/mode-toggle";

export function SiteFooter({className}: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex items-center justify-between gap-4 md:h-24 flex-row py-2">
        <div className="flex items-center gap-4 px-2 flex-row md:gap-2 md:px-0">
          <Icons.logo />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              className="font-medium underline underline-offset-4"
              href={"https://www.instagram.com/wau.tuc/"}
              rel="noreferrer"
              target="_blank"
            >
              Wau!
            </a>
          </p>
        </div>
        <ModeToggle />
      </div>
    </footer>
  );
}
