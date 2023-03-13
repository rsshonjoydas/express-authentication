import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import FormikControl from './FormikControl';

const PasswordInput = ({ label, placeholder, name, values, handleChange, ...rest }: any) => {
  const [passwordShow, setPasswordShow] = useState(false);

  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  };

  return (
    <div className='container'>
      <div className='flex items-center'>
        <FormikControl
          control='input'
          className='label-required'
          label={label}
          placeholder={placeholder}
          name={name}
          type={passwordShow ? 'text' : 'password'}
          value={values}
          onChange={handleChange}
          {...rest}
        />
        <button
          type='button'
          onClick={togglePassword}
          className='w-6 -mb-[60px] -m-10 text-gray-400'
        >
          {passwordShow ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
