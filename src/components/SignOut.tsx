import { useRouter } from '../hooks/useRouter';
import SignOut_Icon from '../assets/signout_icon.png';

const SignOut = () => {
  const { routeTo } = useRouter();

  const handleSignOut = () => {
    if (!window.confirm('로그아웃하시겠습니까?')) return;

    localStorage.removeItem('access_token');
    routeTo('/signin');
  };

  return (
    <button
      className='inline-flex items-center px-4 py-2 border text-base font-medium rounded-md text-black bg-white hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border-white'
      onClick={handleSignOut}
    >
      <img src={SignOut_Icon} alt='Sign Out' className='w-5 h-5 mr-2' />
    </button>
  );
};

export default SignOut;
