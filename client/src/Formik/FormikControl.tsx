import Checkbox from './Checkbox';
import Input from './Input';
import Textarea from './Textarea';

const FormikControl = ({ control, ...rest }: any) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'checkbox':
      return <Checkbox {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
