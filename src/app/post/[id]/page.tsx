'use client';
import { useParams, useRouter } from 'next/navigation';
import { useBlog } from '../../../../context/Context';
import { formatDate } from '../../../../lib/format';
import Link from 'next/link';

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const { getPost } = useBlog();
  const post = getPost(id);
  const router = useRouter();

  if (!post)
    return (
      <main className="max-w-3xl mx-auto p-6 md:min-w-3xl min-w-xl text-black">
        <p>Post not found.</p>
        <button onClick={() => router.push('/')} className="underline text-sm mt-4">
          Back to list
        </button>
      </main>
    );

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6 md:min-w-3xl min-w-xl text-black">
      <div className="text-sm"><Link href="/">← Back</Link></div>
      <h1 className="text-3xl font-semibold">{post.title}</h1>
      <div className="text-sm text-gray-600">
        By {post.author} • {formatDate(post.createdAt)} • {post.category}
      </div>
      <p className="text-gray-900">{post.summary}</p>
      <article className="prose whitespace-pre-wrap">{post.content}</article>
    </main>
  );
}
