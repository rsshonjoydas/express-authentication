import Header from '@/components/Header';
import { Children } from '@/types';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/index.scss';
import Providers from './Providers';

export default function RootLayout({ children }: Children) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Header />

          <main className='bottom-0 min-h-screen pt-20 text-gray-700 transition-colors duration-300 select-none dark:bg-gray-700 dark:text-gray-200'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
