import FullscreenLayout from '@/layouts/FullscreenLayout';
import FullscreenWithTopbarLayout from '@/layouts/MainLayout';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Paths } from './Paths';

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage/AboutPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage/NotFoundPage'));

export const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route element={<FullscreenWithTopbarLayout />}>
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
