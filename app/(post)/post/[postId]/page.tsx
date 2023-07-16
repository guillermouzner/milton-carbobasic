import {notFound} from "next/navigation";
import {Post} from "@prisma/client";
import Link from "next/link";

import {db} from "@/lib/db";
import {Paragraph} from "@/components/milton/paragraph";
import {Header} from "@/components/milton/header";
import {List} from "@/components/milton/list";
import {Icons} from "@/components/icons";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";

async function getPostForUser(postId: Post["id"], userId: string = "cljm39x0m0000ubf0zrr63l9v") {
  return await db.post.findFirst({
    where: {
      id: postId,
      authorId: userId,
    },
  });
}

interface PostPageProps {
  params: {postId: string};
}

export default async function PostPage({params}: PostPageProps) {
  const post = await getPostForUser(params.postId, "cljm39x0m0000ubf0zrr63l9v");

  if (!post) {
    notFound();
  }

  return (
    <div className="container flex flex-col items-center justify-between gap-10 py-8">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center">
          <Link className={cn(buttonVariants({variant: "ghost"}))} href="/blog">
            <>
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              Back
            </>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5 max-w-2xl">
        <div className="flex flex-col gap-2">
          <p className="text-5xl font-bold">{post.title}</p>
          <span className="text-sm mx-2">{formatDate(post.createdAt)}</span>
        </div>
        <div className="mx-2">
          {
            //@ts-ignore
            post.content!.blocks.map((paragraph: any) => {
              return paragraph.type === "paragraph" ? (
                <Paragraph data={paragraph.data} id={paragraph.id} />
              ) : paragraph.type === "header" ? (
                <Header data={paragraph.data} id={paragraph.id} />
              ) : paragraph.type === "list" ? (
                <List data={paragraph.data} id={paragraph.id} />
              ) : null;
            })
          }
        </div>
      </div>
    </div>
  );
}

const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
};
