import { createBrowserRouter, RouteObject } from "react-router";
import Root from "./Root";
import Produtos from "@/pages/Produtos";
import PagInicial from "@/pages/PagInicial";

export const routes: RouteObject[] = [
  {
    index: true,
    element: <PagInicial />,
  },
  {
    path: "/produtos/listar",
    element: <Produtos />,
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
