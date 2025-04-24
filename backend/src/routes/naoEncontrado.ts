import type { Request, Response } from "express";

export const naoEncontrado = (req: Request, res: Response): void => {
  res.status(404).json({msg: "rota não encontrada"});
}