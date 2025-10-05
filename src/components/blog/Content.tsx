'use client';
import { useFormContext } from 'react-hook-form';
import FormField from '@/components/ui/FormField';
import TextArea from '@/components/ui/TextArea';

export default function Content() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <FormField label="Blog Content" error={errors.content?.message as string}>
      <TextArea placeholder="Write your post content..." {...register('content')} />
    </FormField>
  );
}
