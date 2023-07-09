import {redirect} from "next/navigation";

import {authOptions} from "@/lib/auth";
import {getCurrentUser} from "@/lib/session";
import {DashboardShell} from "@/components/shell";
import {DashboardHeader} from "@/components/header";
import {PostCreateButton} from "@/components/post-create-button";
import {db} from "@/lib/db";
import {EmptyPlaceholder} from "@/components/empty-placeholder";
import {PostItemAdmin} from "@/components/post-item-admin";

export default async function AdminPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }
  if (user.email !== "miltonavilaweb@gmail.com") {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  const posts = await db.post.findMany({
    where: {
      authorId: user.id,
    },
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
        <PostCreateButton />
      </DashboardHeader>
      <div>
        {posts?.length ? (
          <div className="divide-y divide-border rounded-md border">
            {posts.map((post) => (
              <PostItemAdmin key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="post" />
            <EmptyPlaceholder.Title>No posts created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any posts yet. Start creating content.
            </EmptyPlaceholder.Description>
            <PostCreateButton variant="outline" />
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  );
}
