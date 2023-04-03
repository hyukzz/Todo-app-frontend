import { useLoginForm } from '../hooks/useSignInForm';
import { useAuth } from '../hooks/useAuth';

const SignIn = () => {
  const { loginSubmitHandler } = useLoginForm();
  useAuth();

  return (
    <div>
      <h1>로그인 페이지</h1>
      <form onSubmit={loginSubmitHandler}>
        <label>
          이메일:
          <input type='email' name='email' data-testid='email-input' />
        </label>
        <label>
          비밀번호:
          <input type='password' name='password' data-testid='password-input' />
        </label>
        <button type='submit' value='Submit' data-testid='signin-button'>
          로그인
        </button>
      </form>
    </div>
  );
};

export default SignIn;
