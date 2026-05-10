import { getPosts } from "@/utils/utils";
import { Grid, Heading } from "@once-ui-system/core";
import Post from "./Post";

interface EarlierPostsProps {
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  direction?: "row" | "column";
  exclude?: string[];
}

export function EarlierPosts({
  columns = "1",
  thumbnail = false,
  exclude = [],
  direction,
}: EarlierPostsProps) {
  let allBlogs = getPosts(["src", "app", "blog", "posts"]);

  // Exclude by slug (exact match)
  if (exclude.length) {
    allBlogs = allBlogs.filter((post) => !exclude.includes(post.slug));
  }

  const sortedBlogs = allBlogs.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedBlogs = sortedBlogs.slice(3, sortedBlogs.length)

  return (
    <>
      {displayedBlogs.length > 0 && (
        <>
          <Heading as="h2" variant="heading-strong-xl" marginLeft="l">
            Earlier posts
          </Heading>
          <Grid columns={columns} s={{ columns: 1 }} fillWidth marginBottom="40" gap="16">
            {displayedBlogs.map((post) => (
              <Post key={post.slug} post={post} thumbnail={thumbnail} direction={direction} />
            ))}
          </Grid>
        </>
      )}
    </>
  );
}