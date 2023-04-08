import { Link } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import { useSignSubmitForm } from '../hooks/useSignSubmitForm';

const SignIn = () => {
  useAuth();

  const { handleEmailChange, handlePasswordChange, emailError, passwordError, disabled, handleSignInSubmit } =
    useSignSubmitForm();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200'>
      <form className='bg-white p-6 rounded-lg shadow-md' onSubmit={handleSignInSubmit}>
        <h1 className='text-4xl font-extrabold mb-8 text-center text-blue-600 tracking-wide leading-tight select-none hover:text-blue-700'>
          로그인
        </h1>
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2 text-lg select-none' htmlFor='email'>
            이메일
            <input
              className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='email'
              onChange={handleEmailChange}
              data-testid='email-input'
              required
            />
            {emailError && <p className='text-red-500 px-2 text-sm py-1 mt-1 rounded select-none'>{emailError}</p>}
          </label>
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 font-bold mb-2 text-lg select-none' htmlFor='password'>
            비밀번호
            <input
              className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='password'
              onChange={handlePasswordChange}
              data-testid='password-input'
              required
            />
            {passwordError && (
              <p className='text-red-500 px-2 text-sm py-1 mt-1 rounded select-none'>{passwordError}</p>
            )}
          </label>
        </div>
        <div className='flex items-center'>
          <button
            className={`w-full py-3 rounded focus:outline-none focus:shadow-outline ${
              disabled ? 'bg-gray-500 text-gray-900' : 'bg-blue-500 hover:bg-blue-700 text-white font-bold'
            }`}
            type='submit'
            disabled={disabled ? true : false}
            data-testid='signin-button'
          >
            로그인
          </button>
        </div>
        <div className='mt-4 text-center select-none'>
          회원이 아니신가요?
          <Link to='/signup' className='ml-1 text-blue-500 hover:text-blue-700 '>
            회원가입 하기
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
