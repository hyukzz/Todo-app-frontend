import { createBrowserRouter } from 'react-router-dom';
import { Router as RemixRouter } from '@remix-run/router/dist/router';

import Home from './pages/Home';
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
    element: <Home />,
  },
  {
    id: 1,
    path: '/signup',
    label: '회원가입',
    element: <SignUp />,
  },
  {
    id: 2,
    path: '/signin',
    label: '로그인',
    element: <SignIn />,
  },
  {
    id: 3,
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
