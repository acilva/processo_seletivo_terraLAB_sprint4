import { getCustomRepository,Repository } from "typeorm";
import { LocationsRepository } from "../repositories/LocationsRepository";
import { Location } from "../entities/Location";

interface ILocationsCreate{
    latitude: string;
    longitude: string;
    coord?: string;
};

class LocationsService{
    private locationsRepository: Repository<Location>;

    constructor() {
        this.locationsRepository = getCustomRepository(LocationsRepository);
    };
    async create({latitude, longitude, coord} : ILocationsCreate) {
       
        const local = await this.locationsRepository.create({
            latitude,
            longitude,
            coord
        })

        await this.locationsRepository.save(local);

        return local;
    };   
        
    async listByLocal(email: string){
        const list = await this.locationsRepository.find({
            where: {email}
        });

        return list;
    };

    async delete(coord: string){
        await this.locationsRepository.createQueryBuilder()
        .delete()
        .from(Location)
        .where("coord = :coord", {coord})
        .execute();
    };       
};

export {LocationsService};