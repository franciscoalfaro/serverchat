const express = require('express');
const http = require('http');
const socketio = require("socket.io");
const Sockets = require('./sockets');
const cors = require('cors')


class Server{
    constructor(){
        this.app = express()
        this.port = 4000
        this.server = http.createServer(this.app);
        
        this.io = socketio(this.server)

    }
    middlewares(){
        this.app.use(cors())

    }

    configSocket(){
        new Sockets(this.io)
    }

    execute(){
        this.server.listen(this.port, () => {
            console.log(`holi Servidor en puerto : ${this.port}`);
          });

        this.configSocket()

    }


}
module.exports = Server;