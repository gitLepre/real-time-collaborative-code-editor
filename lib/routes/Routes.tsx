import { FullscreenLayout } from '@lib/layouts/FullscreenLayout';
import { MainLayout } from '@lib/layouts/MainLayout';
import { Loader } from '@lib/ui/Loader';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Paths } from './Paths';

const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const AppRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={Paths.HomePage} element={<HomePage />} />
        <Route path={Paths.AboutPage} element={<AboutPage />} />
        <Route path={Paths.TestWithParams} element={<AboutPage />} />
        <Route path={Paths.Empty} element={<Navigate to={Paths.HomePage} />} />
      </Route>

      <Route element={<FullscreenLayout />}>
        <Route path={Paths.NotFoundPage} element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Suspense>
);

export default AppRoutes;
