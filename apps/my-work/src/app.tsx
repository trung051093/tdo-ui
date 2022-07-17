import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoading } from './components/Loading';
import { ROUTES } from './constants/routes';
import { Notification } from './components/Notification';
import { UserManagement } from './pages/user-management/UserManagement';
import { UserEdit } from './pages/user-management/UserEdit';
import { PhotoManagement } from './pages/photo-management/PhotoManagement';
import { Register } from './pages/auth/Register';
import { Login } from './pages/auth/Login';
import { LoginToken } from './pages/auth/LoginToken';
import { ForgotPassword } from './pages/auth/ForgotPassword';
import { ResetPassword } from './pages/auth/ResetPassword';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Notification />
      <Routes>
        <Route
          path={ROUTES.Home}
          element={
            <PrivateRoute>
              <UserManagement />
            </PrivateRoute>
          }
        />
         <Route
          path={ROUTES.Users.Edit}
          element={
            <PrivateRoute>
              <UserEdit />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.Photos}
          element={
            <PrivateRoute>
              <PhotoManagement />
            </PrivateRoute>
          }
        />
        <Route path={ROUTES.Authentication.LOGIN} element={<Login />} />
        <Route path={ROUTES.Authentication.REGISTER} element={<Register />} />
        <Route
          path={ROUTES.Authentication.FORGOT_PASSWORD}
          element={<ForgotPassword />}
        />
        <Route
          path={ROUTES.Authentication.RESET_PASSWORD}
          element={<ResetPassword />}
        />
        <Route
          path={ROUTES.Authentication.LOGIN_TOKEN}
          element={<LoginToken />}
        />
      </Routes>
    </Suspense>
  );
}
