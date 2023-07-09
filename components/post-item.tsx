import Link from "next/link";
import {Post} from "@prisma/client";

import {formatDate} from "@/lib/utils";
import {Skeleton} from "@/components/ui/skeleton";

interface PostItemProps {
  post: Pick<Post, "id" | "title" | "published" | "createdAt">;
}

export function PostItem({post}: PostItemProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-background w-[400px]">
      <div className="flex h-[100px] flex-col items-start justify-center rounded-md p-3">
        <div className="space-y-2">
          <Link className="font-semibold hover:underline capitalize" href={`/post/${post.id}`}>
            {post.title}
          </Link>
          <p className="text-sm text-muted-foreground">
            {formatDate(post.createdAt?.toDateString())}
          </p>
        </div>
      </div>
    </div>
  );
}

PostItem.Skeleton = function PostItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
};
