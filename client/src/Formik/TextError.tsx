import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TextError = ({ children }: React.PropsWithChildren<{}>) => (
  <div className='pb-2 text-sm text-red-400'>
    <FontAwesomeIcon icon={faExclamationCircle} /> {children}
  </div>
);

export default TextError;
