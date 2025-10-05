'use client';
import Button from '@/components/ui/Button';

export default function Navigator({
  canBack,
  onBack,
  onNext,
  onSubmit,
  isLast,
  isSubmitting,
}: {
  canBack: boolean;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
  isLast: boolean;
  isSubmitting: boolean;
}) {
  return (
    <div className="flex justify-between pt-4">
      {canBack ? (
        <Button variant="secondary" onClick={onBack}>
          Back
        </Button>
      ) : (
        <div />
      )}
      
      {isLast ? (
        <Button onClick={onSubmit} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      ) : (
        <Button onClick={onNext}>Next</Button>
      )}
    </div>
  );
}
