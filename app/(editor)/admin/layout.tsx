import {notFound} from "next/navigation";

import {getCurrentUser} from "@/lib/session";
import {MainNav} from "@/components/main-nav";
import {UserAccountNav} from "@/components/user-account-nav";
import {dashboardConfig} from "@/config/dashboard";
import {SiteFooter} from "@/components/site-footer";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function AdminLayout({children}: DashboardLayoutProps) {
  const user = await getCurrentUser();

  if (!user) {
    return notFound();
  }
  if (user.email !== "miltonavilaweb@gmail.com") {
    return notFound();
  }

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={dashboardConfig.mainNav} />
          <UserAccountNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email,
            }}
          />
        </div>
      </header>
      <div className="container grid flex-1 gap-12">
        <main className="flex w-full flex-1 flex-col overflow-hidden">{children}</main>
      </div>
      <SiteFooter className="border-t" />
    </div>
  );
}
