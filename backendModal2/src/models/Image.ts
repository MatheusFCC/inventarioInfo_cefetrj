import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import Funcionario from "./Funcionario";

@Entity('images')
export default class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Funcionario, funcionario => funcionario.images)
 @JoinColumn({ name: 'funcionario_id' })
  funcionario: Funcionario;
}