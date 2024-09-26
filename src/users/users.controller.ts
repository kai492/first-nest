import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { GetUserParamDto } from "./dtos/get-user-param.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";



//http:localhost:3000/users
@Controller('users')
export class UsersController{
    
    constructor(private usersService: UsersService){   
    }

    @Get('/:isMarried?')
    getUsers(@Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
            @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
            @Param() param: GetUserParamDto){
        
        console.log(param);
        return this.usersService.getAllusers();    
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number){
        
        return this.usersService.getUserById(id);
    }

    @Post()
    createUser(@Body() user: CreateUserDto){
        console.log(user instanceof CreateUserDto);
        return "A new user has been created"; }
   
    @Patch()
    updateUser(@Body() user: UpdateUserDto){
        console.log(user);
        return "A user has been updated";
    }
}