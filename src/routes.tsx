import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Empresa from './pages/empresa/Empresa';
import NotFound from './pages/404/404';


export default function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="*" element={<NotFound />} />
        {/* {
          dummyRoutes.map((route) => (
            <Route index path={`/${route}`} element={<App />} />
          ))
        } */}
      </Routes>
    </BrowserRouter>
  );
}
