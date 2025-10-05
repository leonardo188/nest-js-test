'use client';
import { useFormContext } from 'react-hook-form';
import FormField from '@/components/ui/FormField';
import TextInput from '@/components/ui/TextInput';

export default function InfoInput() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-4">
      <FormField label="Blog Title" error={errors.title?.message as string}>
        <TextInput placeholder="e.g. Understanding React Hooks" {...register('title')} />
      </FormField>

      <FormField label="Author Name" error={errors.author?.message as string}>
        <TextInput placeholder="e.g. Jane Doe" {...register('author')} />
      </FormField>
    </div>
  );
}
