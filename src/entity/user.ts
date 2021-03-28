import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { Project } from "./Project";
import { Role } from "./Role";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;
    
    @Column()
    nickname: string;

    @Column()
    email: string;

    @Column()
    creditName: string;
    
    @ManyToMany(type => Project)
    @JoinTable()
    projects: Project[];
    
    @ManyToMany(type => Role)
    @JoinTable()
    roles: Role[];
}