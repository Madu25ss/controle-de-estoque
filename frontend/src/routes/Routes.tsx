import { createBrowserRouter, RouteObject } from "react-router";
import Root from "./Root";
import Produtos from "@/pages/Produtos";

export const routes: RouteObject[] = [
  {
    index: true,
    element: <p>Página Inicial</p>,
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
