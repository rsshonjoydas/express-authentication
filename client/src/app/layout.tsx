import Header from '@/components/Header';
import { Children } from '@/types';
import '../styles/index.scss';
import Provider from './Provider';

export default function RootLayout({ children }: Children) {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <Header />
          <main className='bottom-0 pt-20'>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
