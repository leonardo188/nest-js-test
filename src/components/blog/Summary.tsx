'use client';
import { useFormContext } from 'react-hook-form';
import FormField from '@/components/ui/FormField';
import TextArea from '@/components/ui/TextArea';
import Select from '@/components/ui/Select';

const CATEGORIES = ['Tech', 'Lifestyle', 'Business'] as const;

export default function Summary() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-4">
      <FormField label="Blog Summary" error={errors.summary?.message as string}>
        <TextArea placeholder="Short description..." {...register('summary')} />
      </FormField>

      <FormField label="Category" error={errors.category?.message as string}>
        <Select {...register('category')}>
          <option value="">Select...</option>
          {CATEGORIES.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </Select>
      </FormField>
    </div>
  );
}
