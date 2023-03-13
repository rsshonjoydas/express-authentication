import { ErrorMessage, Field, useField } from 'formik';
import TextError from './TextError';

const Input = ({ className, label, name, ...rest }: any) => {
  const [field, meta] = useField(name);

  return (
    <div className='container'>
      <label htmlFor={label} className={className}>
        {label}
      </label>
      <Field
        id={name}
        {...field}
        {...rest}
        className={meta.touched && meta.error ? 'border-error-300' : ''}
      />
      {name === 'password' ||
      name === 'oldPassword' ||
      name === 'newPassword' ||
      name === 'confirmPassword' ? null : (
        <ErrorMessage name={name} component={TextError} />
      )}
    </div>
  );
};

export default Input;
