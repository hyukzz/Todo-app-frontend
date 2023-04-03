import { useRouter } from './useRouter';

type SignInResult = true | false;

interface SignInRequest {
  email: string;
  password: string;
}

export const useLoginForm = () => {
  const { routeTo } = useRouter();

  const login = async (args: SignInRequest): Promise<SignInResult> => {
    const loginRes = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/signin`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(args),
      }
    );
    if (loginRes.ok) {
      const { access_token } = await loginRes.json();

      localStorage.setItem('token', access_token);

      return true;
    } else {
      return false;
    }
  };

  const loginSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const loginResult = await login({
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    });

    if (loginResult === false) {
      alert('로그인 실패');
      return;
    }

    routeTo('/todo');
  };

  return {
    loginSubmitHandler,
  };
};
