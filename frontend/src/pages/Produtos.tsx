import { Table } from "@/components/Tabela/Tabela";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

const Produtos = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("Adicionar Produto");

  return (
    <>
      <main className="w-dvw flex flex-col justify-center">
        <Table title={"Produtos"} modalState={{ isOpen, setIsOpen }} />
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={() => setIsOpen(false)}>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/30">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel
                transition
                className="w-full max-w-md rounded-xl bg-slate-50 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
              >
                <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                  {title}
                </DialogTitle>

                <div className="mt-4 flex flex-col space-y-4">
                  <div className="flex flex-col">
                    <label htmlFor="inputNome">Nome:</label>
                    <input id="inputNome" type="text" className="border p-2 rounded" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="inputPreco">Preço:</label>
                    <input id="inputPreco" type="number" className="border p-2 rounded" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="inputQuantidade">Quantidade:</label>
                    <input id="inputQuantidade" type="number" className="border p-2 rounded" />
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </main>
    </>
  );
};

export default Produtos;
