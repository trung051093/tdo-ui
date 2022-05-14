import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoading } from './components/Loading';
import { ROUTES } from './constants/routes';
import { UserManagement } from './pages/management/UserManagement';

export function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route path={ROUTES.Home} element={<UserManagement />} />
      </Routes>
    </Suspense>
  );
}
