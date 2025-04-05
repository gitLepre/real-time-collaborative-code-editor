import { MainLayout } from '@lib/layouts/MainLayout';
import { Loader } from '@lib/ui/Loader';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Paths } from './Paths';

const CodeEditorPage = lazy(() => import('@/pages/CodeEditorPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const AppRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={Paths.EditorPage} element={<CodeEditorPage />} />
        <Route path={Paths.Empty} element={<Navigate to={Paths.EditorPage} />} />
      </Route>

        <Route path={Paths.NotFoundPage} element={<NotFoundPage />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
