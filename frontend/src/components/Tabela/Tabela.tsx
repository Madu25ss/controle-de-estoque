import {
  // ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
// import { colunas } from "./colunas";
// import { Produto } from "@/types/produto";
import Button from "../Button";
// import { useMemo } from "react";
import { obterProdutos } from "@/services/produto";
import useConfiguracaoTabela from "./ConfiguracaoTabela";
import { Dispatch, SetStateAction } from "react";

type TableProps = {
  title: string;
  modalState: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    // setIsOpen: (state: boolean) => void;
  }
};

export const Table = ({ title, modalState }: TableProps) => {
  // const columns = useMemo<ColumnDef<Produto>[]>(() => colunas, []);
  const columns = useConfiguracaoTabela( modalState );
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
        <h1 className="text-3xl font-light">{title}</h1>
        <Button title={"Novo Produto"} to={"/"} />
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
