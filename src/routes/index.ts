import { Router } from "express";
import produtos from "./produtos";

const router = Router();

router.use('/api/v1/produtos', produtos);

export default router;