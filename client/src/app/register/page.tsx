'use client';

import SocialAuth from '@/components/SocialAuth';
import SubmitButton from '@/components/SubmitButton';
import FormikControl from '@/Formik/FormikControl';
import { registerSchema } from '@/Formik/formikSchema';
import PasswordInput from '@/Formik/PasswordInput';
import TextError from '@/Formik/TextError';
import { register } from '@/redux/features/users/userSlice';
import { useAppDispatch } from '@/redux/hooks';
import { IRegister } from '@/types/auth';
import { ErrorMessage, Form, Formik } from 'formik';
import Link from 'next/link';

const InitialValues: IRegister = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  termsAndConditions: false,
};

const Register = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = async (values: IRegister, { setStatus, resetForm }: any) => {
    const { firstName, lastName, email, password } = values;

    await dispatch(register({ firstName, lastName, email, password }));

    try {
      resetForm({});
      setStatus({ success: true });
    } catch (error) {
      setStatus({ success: false });
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-4 py-12 antialiased sm:px-6 lg:px-8'>
      <div className='relative py-3 mx-auto sm:max-w-xl'>
        <div className='my-2 text-2xl text-center'>Sign Up to new account</div>
        <Formik
          initialValues={InitialValues}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
          validateOnMount
        >
          {({ values, handleChange, isSubmitting, isValid }) => (
            <Form className='relative mt-4 text-left bg-white shadow-md dark:bg-slate-800 dark:shadow-xl lg:w-96 md:w-96 sm:w-80 sm:rounded-lg'>
              <div className='h-2 bg-secondary rounded-t-md' />
              <div className='px-8 py-6'>
                {/* // ? Username & Password Field */}
                <div className='flex justify-center gap-4'>
                  <FormikControl
                    control='input'
                    label='First Name'
                    placeholder='First Name'
                    className='label-required'
                    type='text'
                    name='firstName'
                    value={values.firstName}
                    onChange={handleChange}
                  />
                  <FormikControl
                    control='input'
                    label='Last Name'
                    placeholder='Last Name'
                    className='label-required'
                    type='text'
                    name='lastName'
                    value={values.lastName}
                    onChange={handleChange}
                  />
                </div>
                <FormikControl
                  control='input'
                  label='Username or Email'
                  placeholder='Username or Email'
                  className='label-required'
                  type='email'
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                />
                <PasswordInput
                  label='Password'
                  placeholder='Password'
                  name='password'
                  values={values.password}
                  onChange={handleChange}
                />
                <ErrorMessage name='password' component={TextError} />
                <PasswordInput
                  label='Confirm Password'
                  placeholder='Confirm Password'
                  name='confirmPassword'
                  values={values.confirmPassword}
                  onChange={handleChange}
                />
                <ErrorMessage name='confirmPassword' component={TextError} />

                {/* //? agree button */}
                <FormikControl
                  control='checkbox'
                  type='checkbox'
                  name='termsAndConditions'
                  value={values.termsAndConditions}
                  onChange={handleChange}
                />
                {/* // ? Submit button */}
                <SubmitButton
                  disabled={!isValid || isSubmitting}
                  loading={isSubmitting}
                  label='Register'
                />
                {/* //? Social Login */}
                <p>Or sign up with</p>
                <SocialAuth />
                {/* // ? Toggle Login & Sign Up button */}
                <div className='flex items-center justify-center'>
                  <Link href='/login'>Already have an account? Login</Link>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
