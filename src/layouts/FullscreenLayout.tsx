import { Outlet } from 'react-router-dom';

const FullscreenLayout = ({ children }: { children?: React.ReactNode }) => {
  return <div className="h-screen w-screen">{children ? children : <Outlet />}</div>;
};

export default FullscreenLayout;
