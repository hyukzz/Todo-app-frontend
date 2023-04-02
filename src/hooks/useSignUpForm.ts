import { useState } from 'react';

import { useRouter } from './useRouter';

interface SignUpForm {
  email: string;
  password: string;
}

interface SignUpFormHandlers {
  handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSignUpSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

interface SignUpFormState extends SignUpForm {
  disabled: boolean;
}

export const useSignUpForm = (): SignUpFormState & SignUpFormHandlers => {
  const { routeTo } = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setDisabled(!event.target.value.includes('@') || password.length < 8);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setDisabled(email.length === 0 || event.target.value.length < 8);
  };

  const handleSignUpSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!email.includes('@') || password.length < 8) {
      return;
    }

    try {
      const signUpRes = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/signup`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      if (signUpRes.status === 201) {
        routeTo('/signin');
      } else {
        const statusData = await signUpRes.json();
        const message = statusData.message;

        console.error('회원가입 실패 코드:', signUpRes.status);

        alert(message);
      }
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };

  return {
    email,
    password,
    disabled,
    handleEmailChange,
    handlePasswordChange,
    handleSignUpSubmit,
  };
};
