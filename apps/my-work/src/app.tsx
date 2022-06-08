import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoading } from './components/Loading';
import { ROUTES } from './constants/routes';
import { UserManagement } from './pages/user-management/UserManagement';
import { PhotoManagement } from './pages/photo-management/PhotoManagement';
import { Register } from './pages/auth/Register';
import { Login } from './pages/auth/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { useConnectNotification } from './hooks';

export function App() {
  useConnectNotification();
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route path={ROUTES.Home} element={<UserManagement />} />
        <Route path={ROUTES.Photos} element={<PhotoManagement />} />
        <Route path={ROUTES.Authentication.LOGIN} element={<Login />} />
        <Route path={ROUTES.Authentication.REGISTER} element={<Register />} />
      </Routes>
    </Suspense>
  );
}
