import { Route, Routes } from "react-router-dom";
import { SearchPage } from "../pages/Search/SearchPage";
import { ResultSearchPage } from "../pages/ResultSearch/ResultSearchPage";
import { DetailProduct } from "../pages/DetailProduct/DetailProduct";

const routes = [
  { path: "/*", element: <SearchPage /> },
  { path: "/items", element: <ResultSearchPage /> },
  { path: "/items/:id", element: <DetailProduct /> },
];

const renderRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export const MeliAppRouter = () => {
  return renderRoutes();
};
