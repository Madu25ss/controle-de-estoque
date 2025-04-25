import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { LuTrash2, LuPencil } from "react-icons/lu";
import axios from "axios";

type Produto = {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
};

export const Table = () => {
  // const queryClient = useQueryClient()
  const columns = useMemo<ColumnDef<Produto>[]>(
    () => [
      {
        header: "#ID",
        accessorKey: "id",
        cell: (info) => info.getValue(),
      },
      {
        header: "Nome",
        accessorKey: "nome",
        cell: (info) => info.getValue(),
      },
      {
        header: "Preço",
        accessorKey: "preco",
        cell: (info) => info.getValue(),
      },
      {
        header: "Quantidade",
        accessorKey: "quantidade",
        cell: (info) => info.getValue(),
      },
      {
        header: "Ações",
        accessorKey: "acoes",
        cell: (info) => (
          <div className="flex gap-4 px-2">
            <button>
              <LuPencil />
            </button>

            <button>
              <LuTrash2 />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const { data, isFetching, isSuccess } = useQuery<Produto[]>({
    queryKey: ["produtos"],
    queryFn: () =>
      axios({
        method: "get",
        url: "http://localhost:3001/api/v1/produtos/listar",
        // params: {
        //   firstName: "Fred",
        //   lastName: "Flintstone",
        // },
      }),
  });

  const [tableData, setTableData] = useState<Produto[]>([]);
  useEffect(() => {
    if (isSuccess) setTableData(data);
  }, [isFetching, data]);

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <button>Novo Produto</button>

      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
