import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Funcionario } from "../models/Funcionario";
class FuncionarioController{

    async create(request: Request, response: Response) {
        const { SIAPE, nome, idade, telefone_residencial, telefone_celular, endereco, email, cpf, rg, funcao, cargo} = request.body;
        const funcionariosRepository = getRepository(Funcionario);

        const funcionarioAlreadyExists = await funcionariosRepository.findOne({
            SIAPE
        });

        if(funcionarioAlreadyExists) {
            return response.status(400).json({
                error: "Funcionario já existe!",
            });
        }

        const funcionario = funcionariosRepository.create({
            SIAPE, nome, idade, telefone_residencial, telefone_celular, endereco, email, cpf, rg, funcao, cargo
        });

        await funcionariosRepository.save(funcionario);

        return response.json(funcionario);
    }
}

export { FuncionarioController }