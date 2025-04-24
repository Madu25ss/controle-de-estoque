import { Router } from "express";
import produtos from "./produtos";
import { naoEncontrado } from "./naoEncontrado";
import { testeSaude } from "./testeSaude";



const router = Router();

router.use('/api/v1/produtos', produtos);
router.use('/saude', testeSaude);
router.use(naoEncontrado)

export default router;