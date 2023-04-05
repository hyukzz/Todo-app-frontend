import { useRouter } from './useRouter';
import { useSignForm } from './useSignForm';
import { signUpApi, signInApi } from '../api/signApi';

export const useSignSubmitForm = () => {
  const { routeTo } = useRouter();
  const { email, password, disabled, handleEmailChange, handlePasswordChange } =
    useSignForm();

  const handleSignUpSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!email.includes('@') || password.length < 8) {
      return;
    }

    try {
      await signUpApi(email, password);

      routeTo('/signin');
    } catch (error) {
      alert('회원가입을 다시 시도해주세요.');
    }
  };

  const handleSignInSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      const signInRes = await signInApi(email, password);

      localStorage.setItem('access_token', signInRes.toString());

      routeTo('/todo');
    } catch (error) {
      alert('로그인을 다시 시도해주세요');
    }
  };

  return {
    handleEmailChange,
    handlePasswordChange,
    disabled,
    handleSignUpSubmit,
    handleSignInSubmit,
  };
};
