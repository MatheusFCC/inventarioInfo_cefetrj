import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";


@Entity("funcionarios")
class Funcionario {

    @PrimaryColumn()
    SIAPE: string;

    @Column()
    nome: string;

    @Column()
    idade: number;

    @Column()
    telefone_residencial: string;

    @Column()
    telefone_celular: string;

    @Column()
    endereco: string;

    @Column()
    email: string;

    @Column()
    cpf: string;

    @Column()
    rg: string;

    @Column()
    funcao: string;

    @Column()
    cargo: string;

    @CreateDateColumn()
    criado_em: Date;

}

export { Funcionario }