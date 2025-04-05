import AppRoutes from "@lib/routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { Providers } from "./Providers";

function App() {
  return (
    <Providers>
    <BrowserRouter>
    <AppRoutes />
    </BrowserRouter>
    </Providers>
  );
}

export default App;
