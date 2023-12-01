import {Entity,PrimaryColumn,Column,CreateDateColumn} from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("locations")
class Location{

    @PrimaryColumn()
    id: string;

    @Column()
    latitude: string;

    @Column()
    longitude: string;

    @Column()
    coord: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id=uuid();
        };
    };
};

export {Location};