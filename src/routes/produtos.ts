import { Router } from "express";
import * as controller from "../controlllers/produtos" 

const router = Router();

router.get('/listar', controller.listar);
router.get('/listar/um/:criterio', controller.listarUm);
router.get('/listar/todos/:criterio', controller.listarVarios);

export default router;