import axios from "@/hooks/axios";
import { Produto } from "@/types/produto";
import { useQuery } from "@tanstack/react-query";

export const obterProdutos = () => (useQuery<Produto[]>({
  queryKey: ["produtos"],
  queryFn: () =>
    axios({
      method: "get",
      url: "/api/v1/produtos/listar",
    }).then((res) => res.data),
  })
)

// export function obterProdutos() {
//   useQuery<Produto[]>(
//     {
//       queryKey: ["produtos"],
//       queryFn: () =>
//         axios({
//           method: "get",
//           url: "/api/v1/produtos/listar",
//         }).then((res) => res.data),
//     }
//   )
// }