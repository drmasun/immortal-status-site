import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Project {

    @PrimaryGeneratedColumn()
    channelId: number;

    @Column()
    name: string;

    @Column()
    connectedRoleId: number;

    @Column()
    hide: boolean;
}
