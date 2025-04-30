import { Produto } from "@/types/produto";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

type ModalProdutosProps = {
  aberto: boolean;
  titulo: string;
  aoFechar: () => void;
  produto: Produto;
};

const ModalProdutos = ({
  aberto,
  titulo,
  aoFechar,
  produto,
}: ModalProdutosProps) => {
  return (
    <Dialog
      open={aberto}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={aoFechar}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/30">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-slate-50 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            <DialogTitle
              as="h3"
              className="text-base/7 font-medium text-gray-950"
            >
              {titulo}
            </DialogTitle>

            <div className="mt-4 flex flex-col space-y-4">
              <div className="flex flex-col">
                <label htmlFor="inputNome">Nome:</label>
                <input
                  id="inputNome"
                  type="text"
                  className="border p-2 rounded"
                  value={produto?.nome}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="inputPreco">Preço:</label>
                <input
                  id="inputPreco"
                  className="border p-2 rounded"
                  value={produto?.preco}
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="inputQuantidade">Quantidade:</label>
                <input
                  id="inputQuantidade"
                  type="number"
                  className="border p-2 rounded"
                  value={produto.quantidade}
                />
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default ModalProdutos;
