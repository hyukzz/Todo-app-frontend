import { useAuth } from '../hooks/useAuth';
import { useSignSubmitForm } from '../hooks/useSignSubmitForm';

const SignUp = () => {
  useAuth();

  const {
    handleEmailChange,
    handlePasswordChange,
    disabled,
    handleSignUpSubmit,
  } = useSignSubmitForm();

  return (
    <form onSubmit={handleSignUpSubmit}>
      <div>
        <label htmlFor='email-input'>이메일</label>
        <input
          type='email'
          onChange={handleEmailChange}
          data-testid='email-input'
        />
      </div>

      <div>
        <label htmlFor='password-input'>비밀번호</label>
        <input
          type='password'
          onChange={handlePasswordChange}
          data-testid='password-input'
        />
      </div>

      <button
        type='submit'
        disabled={disabled ? true : false}
        data-testid='signup-button'
      >
        회원가입
      </button>
    </form>
  );
};

export default SignUp;
