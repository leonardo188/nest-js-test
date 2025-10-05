'use client';

export default function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      rows={5}
      {...props}
      className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring ${props.className ?? ''}`}
    />
  );
}
