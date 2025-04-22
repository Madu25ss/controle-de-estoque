// import type { ErrorRequestHandler} from "express";

export const gerenciadorErros = (err, req, res, nxt): any => {
  if(err)
    res.status(500).json({msg: "Erro interno: " + err });
  else
    nxt();
}