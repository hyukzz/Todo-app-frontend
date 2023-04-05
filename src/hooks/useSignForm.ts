import { useState } from 'react';

interface SignForm {
  email: string;
  password: string;
}

interface SignFormState extends SignForm {
  disabled: boolean;
}

interface SignFormHandlers {
  handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useSignForm = (): SignFormState & SignFormHandlers => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setEmail(value);

    setDisabled(!value.includes('@') || password.length < 8);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setPassword(value);

    setDisabled(!email.includes('@') || email.length === 0 || value.length < 8);
  };

  return {
    email,
    password,
    disabled,
    handleEmailChange,
    handlePasswordChange,
  };
};
