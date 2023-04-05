import { useEffect } from 'react';
import { useRouter } from './useRouter';

export const useAuth = () => {
  const { routeTo, currentPath } = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');

    if (!accessToken && currentPath === '/todo') {
      routeTo('/signin');
    }

    if (
      accessToken &&
      (currentPath === '/signin' ||
        currentPath === '/signup' ||
        currentPath === '/')
    ) {
      routeTo('/todo');
    }
  }, [routeTo, currentPath]);
};
