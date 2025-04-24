import { createBrowserRouter, RouteObject } from "react-router";
import Root from "./Root";

export const routes: RouteObject[] = [
  {
    index: true,
    element: <p>Página Inicial</p>,
  },
  {
    path: "/produtos/listar",
    element: <p>Página Listar</p>,
  },
];
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Página de erro</p>,
    children: routes,
  },
]);
