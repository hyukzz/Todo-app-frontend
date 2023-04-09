import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Router as RemixRouter } from '@remix-run/router/dist/router';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Todo from './pages/Todo';

interface RouterElement {
  id: number;
  path: string;
  label: string;
  element: React.ReactNode;
}

const routerData: RouterElement[] = [
  {
    id: 0,
    path: '/',
    label: 'Home',
    element: <Navigate to='/signin' />,
  },
  {
    id: 1,
    path: '/*',
    label: '모든 경로',
    element: <Navigate to='/todo' />,
  },
  {
    id: 2,
    path: '/signup',
    label: '회원가입',
    element: <SignUp />,
  },
  {
    id: 3,
    path: '/signin',
    label: '로그인',
    element: <SignIn />,
  },

  {
    id: 4,
    path: '/todo',
    label: 'TODO',
    element: <Todo />,
  },
];

export const routers: RemixRouter = createBrowserRouter(
  routerData.map(router => ({
    path: router.path,
    element: router.element,
  }))
);
