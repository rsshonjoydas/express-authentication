import { ILogin, IRegister } from '@/types/auth';
import axiosInstance from '@/utils/api';
import { toast } from 'react-toastify';

const login = async (user: ILogin) => {
  try {
    const { email, password } = user;

    const res = await axiosInstance.post('users/login', { email, password });

    toast.success(res.data.message);

    localStorage.setItem('firstLogin', JSON.stringify(true));

    return res;
  } catch (err: any) {
    toast.error(err.response.data.message);
  }

  return true;
};

const register = async (user: IRegister) => {
  try {
    const { firstName, lastName, email, password } = user;

    const res = await axiosInstance.post('users/register', {
      firstName,
      lastName,
      email,
      password,
    });

    toast.success(res.data.message);

    return res;
  } catch (err: any) {
    toast.error(err.response.data.message);
  }

  return true;
};

const authAction = {
  login,
  register,
};

export default authAction;
