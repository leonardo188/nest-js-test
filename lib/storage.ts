import { Post } from './types';

const KEY = 'blog-posts-v1';

export function loadPosts(): Post[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function savePosts(posts: Post[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(KEY, JSON.stringify(posts));
}
