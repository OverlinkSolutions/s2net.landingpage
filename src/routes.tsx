import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { dummyRoutes } from "./assets/images/routes/dummy";

export default function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        {
          dummyRoutes.map((route) => (
            <Route index path={`/${route}`} element={<App />} />
          ))
        }
      </Routes>
    </BrowserRouter>
  );
}
