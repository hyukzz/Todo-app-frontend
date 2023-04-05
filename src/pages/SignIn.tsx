import { useAuth } from '../hooks/useAuth';
import { useSignSubmitForm } from '../hooks/useSignSubmitForm';

const SignIn = () => {
  useAuth();

  const {
    handleEmailChange,
    handlePasswordChange,
    disabled,
    handleSignInSubmit,
  } = useSignSubmitForm();

  return (
    <div>
      <h1>로그인 페이지</h1>
      <form onSubmit={handleSignInSubmit}>
        <label>
          이메일:
          <input
            type='email'
            onChange={handleEmailChange}
            data-testid='email-input'
          />
        </label>
        <label>
          비밀번호:
          <input
            type='password'
            onChange={handlePasswordChange}
            data-testid='password-input'
          />
        </label>
        <button
          type='submit'
          disabled={disabled ? true : false}
          data-testid='signin-button'
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default SignIn;
