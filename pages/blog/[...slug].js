import { useRouter } from "next/dist/client/router";
import React from "react";

export default function BlogPostsPage() {
  const { query } = useRouter();
  console.log(query);
  return (
    <div>
      <h1>The blog posts</h1>
    </div>
  );
}
