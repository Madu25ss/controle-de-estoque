import { Produto } from "@/types/produto"
import { ColumnDef } from "@tanstack/react-table"
import { Dispatch, SetStateAction, useMemo } from "react";
import { LuPencil, LuTrash2 } from "react-icons/lu";

type ConfiguracaoTabelaProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const useConfiguracaoTabela = ({ setIsOpen }:ConfiguracaoTabelaProps): ColumnDef<Produto>[] => {

return useMemo(()=> [
    {
      header: "#",
      cell: ({ row }) => <p className="text-center">{row.index + 1}</p>,
    },
    {
      header: () => <p className="text-start">Nome</p>,
      accessorKey: "nome",
      cell: (info) => info.getValue(),
    },
    {
      header: () => <p className="text-start">Preço</p>,
      accessorKey: "preco",
      cell: (info) => info.getValue(),
    },
    {
      header: () => <p className="text-start">Quantidade</p>,
      accessorKey: "quantidade",
      cell: (info) => info.getValue(),
    },
    {
      header: "Ações",
      accessorKey: "acoes",
      cell: ({ row }) => (
        <div className="flex justify-center gap-4 px-2 font-[Roboto] text-base">
          <button className="text-blue-400" onClick={() => setIsOpen(true)}>
            <LuPencil />
          </button>

          <button className="text-red-400" onClick={()=> console.log(row.id)}>
            <LuTrash2 />
          </button>
        </div>
      )
    },
  ], []);
}

export default useConfiguracaoTabela;