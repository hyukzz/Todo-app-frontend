import { useEffect } from 'react';
import { useRouter } from './useRouter';

export const useAuth = () => {
  const { routeTo, currentPath } = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token && currentPath === '/todo') {
      routeTo('/signin');
    } else if (
      token &&
      (currentPath === '/signin' || currentPath === '/signup')
    ) {
      routeTo('/todo');
    }
  }, [routeTo, currentPath]);
};
