'use client';
import { toast } from 'react-hot-toast';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';
import clsx from 'clsx';

type ToastType = 'success' | 'error' | 'info';

type ToastMessageProps = {
  type?: ToastType;
  message: string;
  onConfirm?: () => void;
  confirmLabel?: string;
};

export default function ToastCustom({
  type = 'info',
  message,
  onConfirm,
  confirmLabel = 'OK',
}: ToastMessageProps) {
  const iconMap = {
    success: <CheckCircle className="h-5 w-5 text-green-500" />,
    error: <AlertCircle className="h-5 w-5 text-red-500" />,
    info: <Info className="h-5 w-5 text-blue-500" />,
  };

  const borderColor =
    type === 'success'
      ? 'border-green-200'
      : type === 'error'
      ? 'border-red-200'
      : 'border-blue-200';

  const ringColor =
    type === 'success'
      ? 'ring-green-100'
      : type === 'error'
      ? 'ring-red-100'
      : 'ring-blue-100';

  return (
    <div
      className={clsx(
        'flex w-full max-w-sm items-start gap-3 rounded-xl border bg-white p-4 shadow-xl ring-1 transition-all',
        borderColor,
        ringColor
      )}
    >
      <div className="mt-0.5">{iconMap[type]}</div>

      <div className="flex flex-col flex-1 text-sm text-gray-900">
        <span className="font-medium">{message}</span>
        {onConfirm && (
          <button
            onClick={onConfirm}
            className={clsx(
              'mt-2 w-fit rounded-md px-3 py-1 text-xs font-medium transition-colors',
              type === 'success'
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : type === 'error'
                ? 'bg-red-100 text-red-700 hover:bg-red-200'
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            )}
          >
            {confirmLabel}
          </button>
        )}
      </div>
    </div>
  );
}

ToastCustom.show = (
  message: string,
  type: ToastType = 'info',
  onConfirm?: () => void,
  confirmLabel?: string
) => {
  toast.custom((t) => (
    <ToastCustom
      type={type}
      message={message}
      confirmLabel={confirmLabel}
      onConfirm={() => {
        toast.dismiss(t.id);
        onConfirm?.();
      }}
    />
  ));
};
