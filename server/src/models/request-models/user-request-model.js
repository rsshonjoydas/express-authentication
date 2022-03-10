import dayjs from "dayjs";
import Joi from "joi";

const schema = Joi.object().keys({
  firstName: Joi.string().alphanum().min(3).max(30).required(),
  lastName: Joi.string().alphanum().min(3).max(30).required(),
  username: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "org"] } })
    .required(),
  password: Joi.string().min(8).max(15).required().label("Password"),
});

const validate = (data) => {
  const result = schema.validate(data);
  data.createdAt = dayjs().format("DD MMMM YYYY, hh:mm:ss A");
  data.updatedAt = dayjs().format("DD MMMM YYYY, hh:mm:ss A");
  result.value = data;
  return result;
};

export default validate;
