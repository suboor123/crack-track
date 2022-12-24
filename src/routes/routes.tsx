import { Navigate, Outlet, RouteObject } from 'react-router-dom';
import LoginV2 from '../authentication/V2/login/LoginV2';
import RegisterV2 from '../authentication/V2/register/RegisterV2';
import Home from '../domain/home/view/Home.view';
import { UserModel } from '../domain/user/model/user.model';
import Profile from '../domain/user/view/profile/profile.view';

const AppRoutes = (currentUser: boolean): RouteObject[] => [
  {
    path: '/main',
    element: currentUser ? <Home /> : <Navigate to="/login" />,
    children: [
      {
        path: 'profile',
        element: <Profile />
      }
    ]
  },

  {
    path: '/login',
    element: !currentUser ? <LoginV2 /> : <Navigate to="/main" />,
  },

  {
    path: '/registration',
    element: !currentUser ? <RegisterV2 /> : <Navigate to="/main" />,
  }
]

export default AppRoutes;