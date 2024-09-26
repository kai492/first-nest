import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService{
    users: {id:number, name: string, email: string, gender: string, isMarried:boolean}[] = [
        {id:1, name:"kai", email:'kai@hotmail.com', gender:'male', isMarried:false},
        {id:2, name:"john", email:'john@gmail.com', gender:'male', isMarried:true},
        {id:3, name:"Nancy", email:'nancy@yahoo.com', gender:'female', isMarried:true}
    ]

    getAllusers(){
        return this.users;
    }

    getUserById(id: number){
        return this.users.find(user => user.id === id);
    }

    createUser(user:{id:number, name: string, email: string, gender: string, isMarried:boolean}){
        this.users.push(user);
    }
}

