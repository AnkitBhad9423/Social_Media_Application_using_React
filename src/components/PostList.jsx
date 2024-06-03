import { useContext, useEffect, useRef, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      {/* loading State */}
      {fetching && <LoadingSpinner />}
      {/* checking for empty state */}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {/* post CRUD operations  */}
      {!fetching &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};

export default PostList;
