import { api } from './api';

interface LoginResponse {
  access_token: string;
}

type SignUpResult = true | false;
type SignInResult = LoginResponse | false;

export const signUpApi = async (
  email: string,
  password: string
): Promise<SignUpResult> => {
  const response = await api.post('/auth/signup', { email, password });

  return response.status === 201 ? true : false;
};

export const signInApi = async (
  email: string,
  password: string
): Promise<SignInResult> => {
  const response = await api.post('/auth/signin', { email, password });

  return response.status === 200
    ? (response.data.access_token as LoginResponse)
    : false;
};
