import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entity/User";

export class UserRepo{
    constructor(
        @InjectRepository(User)
        private UserRepository: Repository<User>,
    ){
        
    }
    public remove(user: User) :Promise<User>{
        return this.UserRepository.remove(user);
    }
}