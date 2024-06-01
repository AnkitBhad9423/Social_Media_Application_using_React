import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hello guys whats is upp",
    reactions: 2,
    userId: "user-9",
    tags: ["Vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass ho gye bhai",
    body: "4 saal kuch nai firr bhi pass",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelivable", "Enjoying"],
  },
];

export default PostListProvider;

// in the starting phase we do a contracting design process where in our consern should be how are the consumer of data and how they will best consume it with our help { we should see ki components ko kis form me data chahiye  }
