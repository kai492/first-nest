import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto{
    
    @IsNumber()
    id:number;

    @IsString({message: "Name should be a string value."})
    @IsNotEmpty()
    @MinLength(3,{message: "name should have a minimum of  3 char"})
    name: string;

    @IsEmail()
    email: string;
    
    @IsOptional()
    @IsString()
    gender?: string;

    @IsBoolean()
    isMarried:boolean;
}

