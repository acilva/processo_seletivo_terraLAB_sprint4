import {Entity,PrimaryColumn,Column,CreateDateColumn,PrimaryGeneratedColumn,DeleteDateColumn} from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("users")
class User{

    @PrimaryColumn()
    id: string;

    @Column()
    email: string;

    @Column()
    username: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id=uuid();
        }
    };
};

export {User};