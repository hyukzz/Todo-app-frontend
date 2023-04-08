import { Link } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import { useSignSubmitForm } from '../hooks/useSignSubmitForm';

const SignUp = () => {
  useAuth();

  const { handleEmailChange, handlePasswordChange, disabled, emailError, passwordError, handleSignUpSubmit } =
    useSignSubmitForm();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200'>
      <form className='bg-white p-6 rounded-lg shadow-md' onSubmit={handleSignUpSubmit}>
        <h1 className='text-4xl font-extrabold mb-8 text-center text-blue-600 tracking-wide leading-tight select-none hover:text-blue-700'>
          회원가입
        </h1>
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2 text-lg select-none' htmlFor='email-input'>
            이메일
            <input
              className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='email'
              onChange={handleEmailChange}
              data-testid='email-input'
            />
            {emailError && <p className='text-red-500 px-2 text-sm py-1 mt-1 rounded select-none'>{emailError}</p>}
          </label>
        </div>

        <div className='mb-6'>
          <label className='block text-gray-700 font-bold mb-2 text-lg select-none' htmlFor='password-input'>
            비밀번호
            <input
              className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='password'
              onChange={handlePasswordChange}
              data-testid='password-input'
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
            data-testid='signup-button'
          >
            회원가입
          </button>
        </div>
        <div className='mt-4 text-center select-none'>
          이미 회원이신가요?
          <Link to='/signin' className='ml-1 text-blue-500 hover:text-blue-700 '>
            로그인 하기
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
