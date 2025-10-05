'use client';

import { BlogProvider } from '../../context/Context';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <BlogProvider>{children}</BlogProvider>;
}
