import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import Image from './Image';

@Entity("funcionarios")
export default class Funcionario {

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

    @OneToMany(() => Image, image => image.funcionario, {
        cascade: ['insert', 'update']
       })
       @JoinColumn({ name: 'funcionario_id' })
        images: Image[];

}

export { Funcionario }