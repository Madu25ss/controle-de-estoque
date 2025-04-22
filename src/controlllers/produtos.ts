import type {Request, Response, NextFunction} from "express";
import sql from '../db/db'

//http status codes

// async function getUsersOver(age) {
//   const users = await sql`
//     select
//       name,
//       age
//     from users
//     where age > ${ age }
//   `
//   // users = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
//   return users
// }


// async function insertUser({ name, age }) {
//   const users = await sql`
//     insert into users
//       (name, age)
//     values
//       (${ name }, ${ age })
//     returning name, age
//   `
//   // users = Result [{ name: "Murray", age: 68 }]
//   return users
// }

//LISTAR
export const listar = async (req:Request, res: Response, _nxt: NextFunction) => {
  const produtos = await sql`
    select
      id,
      nome,
      preco
    from produtos
    where id_status = 1`;

  res.status(200).json(produtos)
};

//LISTAR UM 
export const listarUm = async (req:Request, res: Response, _nxt: NextFunction) => {
    const id = req.params.id;

    const produtos = await sql`
    select
      id,
      nome,
      preco
    from produtos
    where id = ${id}` 
    
    res.status(200).json(produtos[0]);
  };    

//LISTAR VÁRIOS
export const listarVarios = async (req:Request, res: Response, _nxt: NextFunction) => {
  const criterio = req.params.criterio;  

 const produtos = await sql`
  select 
    id, nome, preco
  from 
    produtos 
  where
    nome like ${criterio + '%'}
 `

 res.status(200).json(produtos);
}

// //ADICIONAR - post
export const adicionar = async (req: Request, res: Response, _nxt: NextFunction) => {

  const {nome, preco, quantidade} = req.body;

  console.log(req.body);

  const novoProduto = await sql`
    insert into produtos 
      (nome, preco, quantidade) 
    values 
      (${nome}, ${preco}, ${quantidade})
    returning nome, preco, quantidade`;

  res.status(201).json(novoProduto);
}


  // //EXCLUIR 
  export const excluir = async (req: Request, res: Response, _nxt: NextFunction) => {
    const idReq = req.params.id;
  
    const idExcluir = await sql`
    update produtos
    set id_status = 0
    where id = ${idReq}
    returning *
    `
    console.log(idExcluir);
  
    res.status(200).json({message: `Item ${idReq} excluído!`});
  }


//EDITAR - put
export const editar = async (req: Request, res: Response, _nxt: NextFunction) => {
  const {nome, preco, quantidade} = req.body;
  const idReq = req.params.id;

  const produtoEditado = await sql`
    update produtos 
    set nome = ${nome}, preco = ${preco}, quantidade = ${quantidade}
    where id = ${idReq}
    returning nome, preco, quantidade
  `;

  console.log(produtoEditado);
  res.status(200).json({message: `Item ${idReq} editado!`});
}


