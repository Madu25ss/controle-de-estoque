import Button from "@/components/Button";
import { Link } from "react-router";



const PagInicial = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-light mb-4">Controle de Estoque</h1>
      <main>
        {/* <Button title={"Lista de Produtos"} to={"/produtos/listar"} /> */}
        <Link className="bg-blue-500 rounded text-white px-3 py-2 border-none outline-0 shadow-md cursor-pointer transition delay-100 duration-300 ease-in-out hover:bg-blue-600 hover:-translate-y-0.5" to={"/produtos/listar"}>
          Lista de Produtos
        </Link>
      </main>
    </div>
  );
};

export default PagInicial;
