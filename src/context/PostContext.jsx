import { createContext, useContext, useState } from "react";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    if (typeof newPost === "function") {
      // For toggleLike updates
      setPosts(newPost);
    } else {
      setPosts((prev) => [newPost, ...prev]);
    }
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => useContext(PostContext);
