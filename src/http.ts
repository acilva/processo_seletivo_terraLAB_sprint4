import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

import "./database";
import {routes} from "./routes";

const app = express();

const http = createServer(app); //criando protocolo http
const io = new Server(http); //criando protocolo ws

io.on("connection", (socket: Socket) => {
    //console.log("Se conectou", socket.id);
});

app.use(express.json());

app.use(routes);

export {http, io};