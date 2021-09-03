import { Router } from "express";
import multer from 'multer';
import FuncionarioController from "./controllers/FuncionarioController";
import uploadConfig from './config/uploads';


const routes = Router();
const upload = multer(uploadConfig);

routes.get("/funcionarios",FuncionarioController.index);
routes.post("/funcionarios",upload.array('images'),FuncionarioController.create);




export default routes;