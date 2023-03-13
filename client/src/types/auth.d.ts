import { NextRouter } from 'next/router';

export interface IRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  termsAndConditions?: boolean;
  router?: NextRouter;
}

export interface ILogin {
  email: string;
  password: string;
  remember?: boolean;
  router?: NextRouter;
}

export interface IForgotPassword {
  email: string;
  router?: NextRouter;
}

export interface IProfile {
  fullName: string;
  contactEmail: string;
  phone: string;
  website: string;
  address: string;
  about: string;
}
