'use client';

import { ErrorMessage, Field } from 'formik';
import Link from 'next/link';
import TextError from './TextError';

const Checkbox = ({ name }: any) => (
  <>
    <div className='flex items-center'>
      <Field name={name} id='checkbox' type='checkbox' />
      <label
        htmlFor='checkbox'
        className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
      >
        I agree with the&nbsp;
        <Link href='/terms-and-conditions'>
          <span className='text-blue-600 dark:text-blue-500 hover:underline'>
            terms and conditions
          </span>
        </Link>
        .
      </label>
    </div>

    <ErrorMessage name={name} component={TextError} />
  </>
);

export default Checkbox;
