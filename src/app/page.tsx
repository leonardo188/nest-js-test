'use client';
import Link from 'next/link';
import { useBlog } from '../../context/Context';
import { formatDate } from '../../lib/format';

export default function HomePage() {
  const { posts } = useBlog();

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6 md:min-w-3xl min-w-xl">
      <header className="flex justify-between items-center text-black">
        <h1 className="text-2xl font-semibold">My Blog Posts</h1>
        <Link href="/new" className="underline text-sm">+ New Post</Link>
      </header>

      {posts.length === 0 ? (
        <p className="text-gray-600 flex justify-center">No posts yet. Click 
          <Link href="/new" className="underline mx-1">here</Link> to create one.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map(post => (
            <li key={post.id} className="border rounded-lg p-4 hover:bg-gray-50">
              <Link href={`/post/${post.id}`}>
                <h2 className="text-lg text-black font-medium">{post.title}</h2>
                <p className="text-sm text-gray-700 mt-1">{post.summary}</p>
                <div className="text-xs text-gray-500 mt-2">
                  By {post.author} • {formatDate(post.createdAt)} • {post.category}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
