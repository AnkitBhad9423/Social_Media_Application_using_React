import { useContext, useEffect, useRef, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
    return () => {
      console.log("cleanUp UseEffect.");
      controller.abort();
    };
  }, []); // empty list pass karnke ka mtlb koi dependency hai hi nai toh dubara kabhi call nai jayenge bass first time call jayega

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
