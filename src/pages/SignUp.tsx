import { useSignUpForm } from '../hooks/useSignUpForm';

const SignUp = () => {
  const {
    email,
    password,
    disabled,
    handleEmailChange,
    handlePasswordChange,
    handleSignUpSubmit,
  } = useSignUpForm();

  return (
    <form onSubmit={handleSignUpSubmit}>
      <div>
        <label htmlFor='email-input'>이메일</label>
        <input
          id='email-input'
          type='email'
          value={email}
          onChange={handleEmailChange}
          data-testid='email-input'
        />
      </div>

      <div>
        <label htmlFor='password-input'>비밀번호</label>
        <input
          id='password-input'
          type='password'
          value={password}
          onChange={handlePasswordChange}
          data-testid='password-input'
        />
      </div>

      <button type='submit' data-testid='signup-button' disabled={disabled}>
        회원가입
      </button>
    </form>
  );
};

export default SignUp;
