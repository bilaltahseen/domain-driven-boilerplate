import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "src/domain/user/user.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "src/domain/user/user.entity";

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService
    ) { }

    @Post("/")
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return await this.userService.create(createUserDto);
    }

    @Get("/")
    async findAll(): Promise<User[]> {
        return await this.userService.findAll();
    }
}