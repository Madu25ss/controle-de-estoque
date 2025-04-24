import { Router } from "express";
import * as controller from "../controlllers/produtos" 


const router = Router();

router.get('/listar', controller.listar);
router.get('/listar/um/:id', controller.listarUm);
router.get('/listar/todos/:criterio', controller.listarVarios);

router.get('/excluir/:id', controller.excluir);

router.post('/adicionar', controller.adicionar);


router.put('/editar/:id', controller.editar);




export default router;