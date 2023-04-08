import { useRouter } from './useRouter';
import { useSignForm } from './useSignForm';
import { signUpApi, signInApi } from '../api/signApi';

export const useSignSubmitForm = () => {
  const { routeTo } = useRouter();
  const { email, password, disabled, emailError, passwordError, handleEmailChange, handlePasswordChange } =
    useSignForm();

  const handleSignUpSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (emailError || passwordError) {
      return;
    }

    try {
      await signUpApi(email, password);

      routeTo('/signin');
    } catch (error) {
      alert('Please try signing up again.');
    }
  };

  const handleSignInSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (emailError || passwordError) {
      return;
    }

    try {
      const signInRes = await signInApi(email, password);

      localStorage.setItem('access_token', signInRes.toString());

      routeTo('/todo');
    } catch (error) {
      alert('Please try signing in again.');
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
