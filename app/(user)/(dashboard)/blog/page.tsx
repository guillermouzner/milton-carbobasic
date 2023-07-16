// esto es lo que vera el usuario
import {db} from "@/lib/db";
import {PostItem} from "@/components/post-item";
import {EmptyPlaceholder} from "@/components/empty-placeholder";

export default async function DashboardPage() {
  const posts = await db.post.findMany({
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

  console.log(posts);

  return (
    <div>
      <div>
        {posts?.length ? (
          <div className="divide-y divide-border rounded-md border">
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="post" />
            <EmptyPlaceholder.Title>No posts created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>Any posts yet.</EmptyPlaceholder.Description>
          </EmptyPlaceholder>
        )}
      </div>
    </div>
  );
}
