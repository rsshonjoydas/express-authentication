'use client';

import { store } from '@/redux/store';
import { Children } from '@/types';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Providers = ({ children }: Children) => (
  <ThemeProvider enableSystem attribute='class'>
    <Provider store={store}>
      <ToastContainer
        // position='top-right'
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        // rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
      {children}
    </Provider>
  </ThemeProvider>
);

export default Providers;
