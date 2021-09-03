import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Funcionario } from "../models/Funcionario";
import funcionarioView from "../views/funcionario_view";
import * as Yup from 'yup';

export default {

    async index(request: Request, response: Response){
        const funcionariosRepository = getRepository(Funcionario);
        const funcionarios = await funcionariosRepository.find({
            relations:['images']
        });
        return response.json(funcionarioView.renderMany(funcionarios));
    },

    async create(request: Request, response: Response) {
        const { SIAPE, nome, idade, telefone_residencial, telefone_celular, endereco, email, cpf, rg, funcao, cargo} = request.body;
        const funcionariosRepository = getRepository(Funcionario);

        const requestImages = request.files as Express.Multer.File[];

        const images = requestImages.map(image => {
            return {
              path: image.filename,
            }
          });
        const data ={
            SIAPE,
             nome,
             idade, 
             telefone_residencial, 
             telefone_celular, 
             endereco, 
             email, 
             cpf, 
             rg, 
             funcao, 
             cargo,
             images
        };

        const schema = Yup.object().shape({
            SIAPE: Yup.number().required('Siape obg'),
            nome: Yup.string().required(),
            idade: Yup.number().required(),
            telefone_residencial: Yup.string().required(),
            telefone_celular: Yup.string().required(),
            endereco: Yup.string().required(),
            email: Yup.string().required(),
            cpf: Yup.string().required(),
            rg: Yup.string().required(),
            funcao: Yup.string().required(),
            cargo: Yup.string().required(),
            images: Yup.array(
                Yup.object().shape({
                  path: Yup.string().required(),
                })
              )
        });

        await schema.validate(data,{
            abortEarly: false,
        });
        const funcionario = funcionariosRepository.create(data);

        await funcionariosRepository.save(funcionario);

        return response.status(201).json(funcionario);
    }
}





