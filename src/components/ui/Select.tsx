'use client';

export default function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring ${props.className ?? ''}`}
    />
  );
}
