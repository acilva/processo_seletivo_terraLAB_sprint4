import {Request,Response} from "express";
import {CreateDateColumn,DeleteDateColumn} from typeorm;
import {UsersService} from "../services/UsersService";
import {UsersRepository} from "../repositories/UsersRepository";


class UsersController{
    async create(request: Request, response: Response):Promise<Response>{
        const {email, username}=request.body;

        const usersService = new UsersService();

        const user = await usersService.create(email,username);

        return response.json(user);
    }
    
    async findByEmail(request: Request, response: Response) {
        const { email } = request.params;

        const usersService = new UsersService();

        const users = await usersService.findByEmail(email);

        return response.json(users);
    };
};

export{UsersController}