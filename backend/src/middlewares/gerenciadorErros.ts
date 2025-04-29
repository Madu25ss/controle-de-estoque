// import type { ErrorRequestHandler} from "express";

export const gerenciadorErros = (err, req, res, nxt): any => {
  if (err)
    res.status(500).json({
      msg: `Erro ${err ?? "interno"}: ` + err?.message || "Erro desconhecido",
      detalhe: err.errors ? err.errors : undefined,
    });
  else nxt();
};