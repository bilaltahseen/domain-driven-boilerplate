import { IsNotEmpty, IsString } from "class-validator";

export class User {

    readonly id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    email: string;


}