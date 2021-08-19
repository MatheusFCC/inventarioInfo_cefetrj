import { Router } from "express";
import { FuncionarioController } from "./controllers/FuncionarioController";

const router = Router();

const funcionarioController = new FuncionarioController();

router.post("/funcionarios", funcionarioController.create);

export { router };