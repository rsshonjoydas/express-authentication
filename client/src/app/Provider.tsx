'use client';

import { Children } from '@/types';
import { ThemeProvider } from 'next-themes';

const Provider = ({ children }: Children) => (
  <ThemeProvider enableSystem attribute='class'>
    <div className='min-h-screen text-gray-700 transition-colors duration-300 select-none dark:bg-gray-700 dark:text-gray-200'>
      {children}
    </div>
  </ThemeProvider>
);

export default Provider;
