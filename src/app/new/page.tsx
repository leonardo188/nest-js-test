'use client';

import Layout from '@/components/blog/Layout';
import Navigator from '@/components/blog/Navigator';
import InfoInput from '@/components/blog/InfoInput';
import Summary from '@/components/blog/Summary';
import Content from '@/components/blog/Content';
import Review from '@/components/blog/Review';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useBlog } from '../../../context/Context';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Schema = z.object({
  title: z.string().min(1, 'Title is required'),
  author: z.string().min(1, 'Author is required'),
  summary: z.string().min(1, 'Summary is required'),
  category: z.enum(['Tech', 'Lifestyle', 'Business']).refine(val => !!val, {
    message: 'Category is required',
    }),
  content: z.string().min(1, 'Content is required'),
});
type FormValues = z.infer<typeof Schema>;

const stepFields: (keyof FormValues)[][] = [
  ['title', 'author'],
  ['summary', 'category'],
  ['content'],
  [],
];

export default function NewPostPage() {
  const methods = useForm<FormValues>({
    resolver: zodResolver(Schema),
    mode: 'onChange',
  });
  const [step, setStep] = useState(0);
  const { addPost } = useBlog();
  const router = useRouter();

  const steps = [
    { title: 'Step 1 — Basic Info', element: <InfoInput /> },
    { title: 'Step 2 — Summary & Category', element: <Summary /> },
    { title: 'Step 3 — Content', element: <Content /> },
    { title: 'Step 4 — Review & Submit', element: <Review /> },
  ];

  const isLast = step === steps.length - 1;

  const next = async () => {
    const valid = await methods.trigger(stepFields[step]);
    if (!valid) return;
    setStep(s => Math.min(s + 1, steps.length - 1));
  };

  const back = () => setStep(s => Math.max(s - 1, 0));

  const submit = methods.handleSubmit(values => {
    const id = addPost(values);
    router.push(`/post/${id}`);
  });

  return (
    <FormProvider {...methods}>
      <div className="max-w-3xl mx-auto p-6 space-y-6 md:min-w-3xl min-w-xl text-black">
        <div className="text-sm text-gray-600">Step {step + 1} of {steps.length}</div>

        <Layout title={steps[step].title}>
          {steps[step].element}

          <Navigator
            canBack={step > 0}
            onBack={back}
            onNext={next}
            onSubmit={submit}
            isLast={isLast}
            isSubmitting={methods.formState.isSubmitting}
          />

          <div className="pt-4 text-sm">
            <Link href="/">← Back to Home</Link>
          </div>
        </Layout>
      </div>
    </FormProvider>
  );
}
