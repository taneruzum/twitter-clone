import Post from "~/components/post";
import { posts as postData } from "~/mock/posts";
import { WVList } from "virtua";
import { useState } from "react";
export default function ForYou() {
  const [posts, setPosts] = useState(postData);
  return (
    <WVList
      onRangeChange={async (start, end) => {
        if (end + 1 === posts.length) {
          setPosts((prev) => [...prev, ...postData]);
        }
      }}
    >
      {posts.map((post, key) => (
        <Post post={post} key={post.id + key} />
      ))}
    </WVList>
  );
}
