import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    roleId: number;

    @Column()
    roleName: string;

}
