import type { Request, Response } from "express";
import sql  from '../db/db';

export const testeSaude = async (req: Request, res: Response): Promise<void> => {
  try {
    await sql`SELECT 1`;
    res.status(200).json({ msg: "OK" })
  } catch (error) {
    res.status(500).json({ msg: "Erro ao fazer a requisição: " + error });
  }
}