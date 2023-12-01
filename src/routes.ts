import {Router} from "express";
import { UsersController } from "./controllers/UsersControllers"; 
import { LocationsController} from "./controllers/LocationsControllers"; 
import { UsersRepository } from "./repositories/UsersRepository";

//inicio roteamento no nosso servidor
const routes = Router();

const usersController = new UsersController();
const locationsController = new LocationsController();

//users
routes.post("/users", usersController.create );
routes.get("/users/:email", usersController.findByEmail);
routes.delete("/users/:email", usersController.delete);

//location
routes.post("/locations", locationsController.create);
routes.delete("/locations/:coord", locationsController.delete);

export {routes};









//rota POST - insert data
usersRouter.post('/add', (Request,Response) => {
    return Response.json("add user");
});

//rota PUT ou PATCH - insert if a new id
usersRouter.get('/getAll', (Request,Response) => {
    return Response.json("get user");
});

//rota DELETE - delete data
usersRouter.delete('/remove', (Request,Response) => {
    return Response.json("Remove user");
});
//exportar a rota
export default usersRouter;