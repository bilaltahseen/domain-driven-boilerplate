import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

/* istanbul ignore if  */
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    email: string;


}