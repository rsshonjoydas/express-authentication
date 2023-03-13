import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

type IType = {
  label: string;
  name: string;
  className: string;
  rest: string[];
};

const Textarea = ({ label, name, className, ...rest }: IType) => (
  <div className='container'>
    <label htmlFor={name} className={className}>
      {label}
    </label>
    <Field as='textarea' id={name} name={name} {...rest} className='h-28' />
    <ErrorMessage name={name} component={TextError} />
  </div>
);

export default Textarea;
