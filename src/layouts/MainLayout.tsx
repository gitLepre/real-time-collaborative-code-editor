import MainHeader from '@/components/MainHeader';
import { Outlet } from 'react-router-dom';

const FullscreenWithTopbarLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <MainHeader />

      <main className="grow">{children ? children : <Outlet />}</main>
    </div>
  );
};

export default FullscreenWithTopbarLayout;
