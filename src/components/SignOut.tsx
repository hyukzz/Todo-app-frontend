import { useState } from 'react';

import { useRouter } from '../hooks/useRouter';
import SignOutIcon from '../assets/signout_icon.png';
import { notification } from '../utils/toast';

const SignOut = () => {
  const { routeTo } = useRouter();

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSignOut = () => {
    setShowConfirmation(true);
  };

  const handleConfirmSignOut = () => {
    localStorage.removeItem('access_token');
    notification('success', '안녕히 가세요 ...');
    routeTo('/signin');
  };

  const handleCancelSignOut = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <button
        className='flex items-center justify-center space-x-2 px-4 py-2 rounded-md text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90 focus:outline-none'
        onClick={handleSignOut}
      >
        <img src={SignOutIcon} alt='Sign Out' className='w-5 h-5 select-none' />
      </button>
      {showConfirmation && (
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-10'>
          <div className='bg-white rounded-lg p-5 shadow-lg'>
            <h2 className='text-lg font-medium mb-4 select-none'>로그아웃하시겠습니까?</h2>
            <div className='flex justify-end'>
              <button
                className='bg-gray-400 hover:bg-gray-500 text-white font-medium rounded-md px-3 py-2 select-none mr-2'
                onClick={handleCancelSignOut}
              >
                취소
              </button>
              <button
                className='bg-red-500 hover:bg-red-600 text-white font-medium rounded-md px-3 py-2 select-none'
                onClick={handleConfirmSignOut}
              >
                로그아웃
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignOut;
