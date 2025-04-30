import ModalProdutos from "@/components/ModalProdutos";
import { Table } from "@/components/Tabela/Tabela";
import { Produto } from "@/types/produto";
import { useCallback, useState } from "react";

const Produtos = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("Adicionar Produto");
  const [produto, setProduto] = useState<Produto>({} as Produto);

  const aoAbrir = useCallback((_title: string = title) => {
    console.log(produto); // busca dos dados
    setTitle(_title);
    setIsOpen(true);
  }, []);

  const aoFechar = useCallback(() => {
    setIsOpen(false);
    // limpar os campos
  }, []);

  return (
    <>
      <main className="w-dvw flex flex-col justify-center">
        <Table titulo={"Produtos"} aoAbrir={aoAbrir} setProduto={setProduto}/>
        <ModalProdutos titulo={title} aberto={isOpen} aoFechar={aoFechar} produto={produto}/>
      </main>
    </>
  );
};

export default Produtos;
