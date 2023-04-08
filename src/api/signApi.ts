import { AxiosError } from 'axios';

import { api } from './api';
import { notification } from '../utils/toast';

export const signUpApi = async (email: string, password: string) => {
  try {
    const response = await api.post('/auth/signup', { email, password });

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      notification('error', error.response?.data.message);
      return;
    } else {
      return;
    }
  }
};

export const signInApi = async (email: string, password: string) => {
  try {
    const response = await api.post('/auth/signin', { email, password });

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      // 401에러만 영어로 데이터를 내려주기 때문에 예외처리
      if (error.response?.status === 401) {
        notification('error', '아이디와 비밀번호를 확인해주세요!');
        return;
      } else {
        notification('error', error.response?.data.message);
        return;
      }
    }
  }
};
