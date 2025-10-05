'use client';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export default function Button({ variant = 'primary', className, ...rest }: Props) {
  const base = 'px-4 py-2 rounded-md font-medium border transition';
  const style =
    variant === 'primary'
      ? 'bg-black text-white border-black hover:opacity-80'
      : 'bg-white text-black border-gray-300 hover:bg-gray-50';
  return <button {...rest} className={`${base} ${style} ${className ?? ''}`} />;
}
