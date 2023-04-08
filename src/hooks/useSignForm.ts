import { useState } from 'react';

interface SignForm {
  email: string;
  password: string;
}

interface SignFormState extends SignForm {
  disabled: boolean;
  emailError: string | null;
  passwordError: string | null;
}

interface SignFormHandlers {
  handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useSignForm = (): SignFormState & SignFormHandlers => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const error = !value.includes('@') ? '이메일에 @를 포함해주세요.' : null;

    setEmail(value);
    setDisabled(error !== null || password.length < 8);
    setEmailError(error);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const error = value.length < 8 ? '비밀번호는 8자 이상이어야 합니다.' : null;

    setPassword(value);
    setDisabled(!email.includes('@') || email.length === 0 || error !== null);
    setPasswordError(error);
  };

  return {
    email,
    password,
    disabled,
    emailError,
    passwordError,
    handleEmailChange,
    handlePasswordChange,
  };
};
