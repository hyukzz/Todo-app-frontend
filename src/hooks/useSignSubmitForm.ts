import { useRouter } from './useRouter';
import { useSignForm } from './useSignForm';
import { signUpApi, signInApi } from '../api/signApi';
import { notification } from '../utils/toast';
import { AxiosError } from 'axios';

export const useSignSubmitForm = () => {
  const { routeTo } = useRouter();
  const { email, password, disabled, emailError, passwordError, handleEmailChange, handlePasswordChange } =
    useSignForm();

  const handleSignUpSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (emailError || passwordError) {
      return;
    }

    const response = await signUpApi(email, password);
    if (response?.status === 201) {
      notification('success', '회원가입에 성공했습니다!');
      routeTo('/signin');
    } else {
      return;
    }
  };

  const handleSignInSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (emailError || passwordError) {
      return;
    }

    const response = await signInApi(email, password);

    if (response?.status === 200) {
      notification('success', '로그인에 성공했습니다!');
      localStorage.setItem('access_token', response.data.access_token);
      routeTo('/todo');
    } else {
      return;
    }
  };

  return {
    handleEmailChange,
    handlePasswordChange,
    disabled,
    emailError,
    passwordError,
    handleSignUpSubmit,
    handleSignInSubmit,
  };
};
