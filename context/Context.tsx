'use client';

import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { Post, PostBase } from '../lib/types';
import { loadPosts, savePosts } from '../lib/storage';

type State = { posts: Post[] };
type Action = { type: 'init'; posts: Post[] } | { type: 'add'; post: Post };

const BlogContext = createContext<{
  posts: Post[];
  addPost: (data: PostBase) => string;
  getPost: (id: string) => Post | undefined;
}>({
  posts: [],
  addPost: () => '',
  getPost: () => undefined,
});

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'init':
      return { posts: action.posts };
    case 'add': {
      const next = [action.post, ...state.posts];
      savePosts(next);
      return { posts: next };
    }
    default:
      return state;
  }
}

export function BlogProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { posts: [] });

  useEffect(() => {
    dispatch({ type: 'init', posts: loadPosts() });
  }, []);

  const addPost = (data: PostBase) => {
    const post: Post = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    dispatch({ type: 'add', post });
    return post.id;
  };

  const getPost = (id: string) => state.posts.find(p => p.id === id);

  return (
    <BlogContext.Provider value={{ posts: state.posts, addPost, getPost }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  return useContext(BlogContext);
}
