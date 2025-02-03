import { Paths } from '@/shared/routes';
import { generatePath, Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header className="h-16 bg-blue-500 w-full flex items-center justify-end gap-4">
      <Link to={Paths.HomePage}>Home</Link>
      <Link to={generatePath(Paths.TestWithParams, { id: '1' })}>Test Page</Link>
    </header>
  );
};

export default MainHeader;
