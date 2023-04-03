import { createBrowserRouter } from 'react-router-dom';
import { Router as RemixRouter } from '@remix-run/router/dist/router';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Todo from './pages/Todo';
import IsAuthLayout from './layout/IsAuthLayout';

interface RouterBase {
  id: number;
  path: string;
  label: string;
  element: React.ReactNode;
}

interface AccessibleRouterElement extends RouterBase {
  isAuth?: boolean;
}

interface UserAccessibleRouterElement extends RouterBase {
  isAuth: true;
  isUserPage?: boolean;
}

type RouterElement = AccessibleRouterElement | UserAccessibleRouterElement;

const routerData: RouterElement[] = [
  {
    id: 0,
    path: '/',
    label: 'Home',
    element: <Home />,
    isAuth: false,
  },
  {
    id: 1,
    path: '/signup',
    label: '회원가입',
    element: <SignUp />,
    isAuth: false,
  },
  {
    id: 2,
    path: '/signin',
    label: '로그인',
    element: <SignIn />,
    isAuth: false,
  },
  {
    id: 3,
    path: '/todo',
    label: 'TODO',
    element: <Todo />,
    isAuth: true,
  },
];

export const routers: RemixRouter = createBrowserRouter(
  routerData.map(router => {
    if (router.isAuth) {
      return {
        path: router.path,
        element: <IsAuthLayout>{router.element}</IsAuthLayout>,
      };
    } else {
      return {
        path: router.path,
        element: router.element,
      };
    }
  })
);
