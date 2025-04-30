import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Produto } from "@/types/produto";
import Button from "../Button";
import { obterProdutos } from "@/services/produto";
import useConfiguracaoTabela from "./ConfiguracaoTabela";

type TableProps = {
  titulo: string;
  aoAbrir: (title?: string) => void;
  setProduto: (produto: Produto) => void;
};

export const Table = ({ titulo, aoAbrir, setProduto }: TableProps) => {
  const columns = useConfiguracaoTabela(aoAbrir, setProduto);
  const { data, isFetching, isSuccess } = obterProdutos();
  const table = useReactTable({
    data: data ?? [],                
    columns,
    getCoreRowModel: getCoreRowModel(),
    // id da linha
    getRowId: (row) => String(row.id),
  });

  return (
    <div className="flex flex-col bg-stone-50 rounded-md h-[100%] p-4">
      <div className="flex justify-between ps-1 pe-3 py-3 mb-4">
        <h1 className="text-3xl font-light">{titulo}</h1>
        <Button
          title={"Novo Produto"}
          onClick={() => aoAbrir()}
          className="bg-blue-500 rounded text-white px-3 py-1 border-none outline-0 shadow-md cursor-pointer transition delay-100 duration-300 ease-in-out hover:bg-blue-600 hover:-translate-y-0.5"
        />
      </div>

      <table className="border-collapse">
        <thead className="border-b boder-solid border-blue-400">
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
                    <td
                      className="font-noto text-sm text-slate-500 px-2 py-1"
                      key={cell.id}
                    >
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
