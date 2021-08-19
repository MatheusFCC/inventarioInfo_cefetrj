import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEmployees1629397616308 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
        new Table({
            name: "funcionarios",
            columns: [
                {
                    name: "SIAPE",
                    type:"varchar",
                    isPrimary: true,
                },
                {
                    name: "nome",
                    type: "varchar",
                },
                {
                    name: "idade",
                    type: "int",
                },
                {
                    name: "telefone_residencial",
                    type: "varchar",
                },
                {
                    name: "telefone_celular",
                    type: "varchar",
                },
                {
                    name: "endereco",
                    type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                },
                {
                    name: "cpf",
                    type: "varchar",
                },
                {
                    name: "rg",
                    type: "varchar",
                },
                {
                    name: "funcao",
                    type: "varchar",
                },
                {
                    name: "cargo",
                    type: "varchar",
                },
                {
                    name: "criado_em",
                    type: "timestamp",
                    default: "now()",
                }
            ]
        })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("funcionarios");
    }

}
