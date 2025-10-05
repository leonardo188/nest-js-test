'use client';
import { useFormContext } from 'react-hook-form';

export default function Review() {
  const { watch } = useFormContext();
  const v = watch();

  return (
    <div className="space-y-3 text-sm">
      <Item label="Title" value={v.title} />
      <Item label="Author" value={v.author} />
      <Item label="Summary" value={v.summary} />
      <Item label="Category" value={v.category} />
      <Item label="Content" value={v.content} multiline />
    </div>
  );
}

function Item({ label, value, multiline = false }: { label: string; value?: string; multiline?: boolean }) {
  return (
    <div>
      <div className="text-gray-500">{label}</div>
      <div className={multiline ? 'whitespace-pre-wrap' : ''}>{value || '-'}</div>
    </div>
  );
}
