import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/application/dto/create-user.dto";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "src/infrastructure/models/user.model";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>
    ) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        return this.userRepository.save(createUserDto);
    }
    
    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }
}