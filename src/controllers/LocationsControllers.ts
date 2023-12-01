import {Request,Response} from "express";
import {LocationsService} from "../services/LocationsService"


class LocationsController{
    async create(request: Request, response: Response){
        const {latitude,longitude,email,coord}=request.body;

        const locationsService = new LocationsService();

        //erro
        const location = await locationsService.create({
            latitude,
            longitude,
            coord,
        });

        return response.json(location);
    }; 

    async showByLocation(request: Request, response: Response){
        const {id}=request.params;

        const locationsService = new LocationsService();

        //erro
        const list = await locationsService.listByLocation(id);

        return response.json(list);
    }; 

    async delete(request: Request, response: Response){
        const {coord}=request.params;

        const {latitude,longitude} = request.body;
        //erro
        const locationsService  = new LocationsService();

        const location  = await locationsService.delete(coord);

        return response.json(location);
    }; 
};

export{LocationsController}