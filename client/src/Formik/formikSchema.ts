/* eslint-disable import/prefer-default-export */
import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  name: Yup.string().required('Your name is required.').min(3, 'Too short.').max(25, 'Too long.'),
  email: Yup.string().email('Invalid email.').required('The email is required.'),
  password: Yup.string().required('The password is required.').min(8, 'The password is too short.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], `Password doesn't match`)
    .required('You need to confirm your password.'),
  termsAndConditions: Yup.boolean().oneOf([true], 'You need to accept the terms and conditions'),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email.').required('The email is required.'),
  password: Yup.string().required('The password is required.').min(8, 'The password is too short.'),
});

export const emailSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email.').required('The email is required.'),
});

export const profileSchema = Yup.object().shape({
  fullName: Yup.string().min(3, 'Too short.').max(25, 'Too long.'),
  contactEmail: Yup.string().email('Invalid email.'),
  address: Yup.string().nullable(),
  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(1000000000, 'Too short')
    .max(9999999999, 'Too long'),
  // .required('A phone number is required'),
  website: Yup.string().url(),
  about: Yup.string().min(5, 'too small!').max(500, 'Too Long String'),
});

export const nameSchema = Yup.object().shape({
  name: Yup.string().required('Your name is required.').min(3, 'Too short.').max(25, 'Too long.'),
});

export const changePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .required('The old password is required.')
    .min(8, 'The password is too short.'),
  newPassword: Yup.string()
    .required('The new password is required.')
    .min(8, 'The password is too short.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], `Password doesn't match`)
    .required('You need to confirm your password.'),
});
