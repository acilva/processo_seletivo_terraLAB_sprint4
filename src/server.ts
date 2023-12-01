import {http} from "./http";
import "./websocket/user";
import "./websocket/location";

http.listen(8080, () => console.log("server is running on port 8080"));



