import dayjs from 'dayjs';
import Joi, { ObjectSchema } from 'joi';

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt?: string;
  updatedAt?: string;
}

const schema: ObjectSchema<UserData> = Joi.object<UserData>({
  firstName: Joi.string().alphanum().min(3).max(30).required(),
  lastName: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } })
    .required(),
  password: Joi.string().min(8).max(15).required().label('Password'),
});

const userValidation = (data: UserData) => {
  const result = schema.validate(data, { abortEarly: false });
  const validatedData: UserData = {
    ...data,
    createdAt: dayjs().format('DD MMMM YYYY, hh:mm:ss A'),
    updatedAt: dayjs().format('DD MMMM YYYY, hh:mm:ss A'),
  };
  result.value = validatedData;
  return result;
};

export default userValidation;
