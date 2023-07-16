import {db} from "@/lib/db";
import {PostItem} from "@/components/post-item";
import {EmptyPlaceholder} from "@/components/empty-placeholder";
import { absoluteUrl } from "@/lib/utils";


export default async function BlogPage() {
  const res = await fetch(`${absoluteUrl("/api/posts")}`, { cache: 'no-store' });
  const posts = await res.json();

  //console.log(posts);
  

  return (
    <div>
      <div>
      {posts?.length ? (
          <div className="divide-y divide-border rounded-md border">
            {posts.map((post: any) => (
              <PostItem key={post.id+"xls"} post={post} />
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

/*
        {posts?.length ? (
          <div className="divide-y divide-border rounded-md border">
            {posts.map((post: any) => (
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
*/