import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoading } from './components/Loading';
import { ROUTES } from './constants/routes';
import { UserManagement } from './pages/management/UserManagement';
import { Register } from './pages/auth/Register';
import { Login } from './pages/auth/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route
          path={ROUTES.Home}
          element={
            <PrivateRoute>
              <UserManagement />
            </PrivateRoute>
          }
        />
        <Route path={ROUTES.Authentication.LOGIN} element={<Login />} />
        <Route path={ROUTES.Authentication.REGISTER} element={<Register />} />
      </Routes>
    </Suspense>
  );
}
