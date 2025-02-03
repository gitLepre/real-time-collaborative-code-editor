import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@shared/routes';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
