const BandList = require('./band-list')
class Sockets {

    constructor(io) {
        this.io = io;

        this.bandList = new BandList()


        this.socketEvents()

    }

    socketEvents() {
        //conexion 
        this.io.on('connection', (socket) => {

            console.log('cliente conectado')
            socket.emit('current-band', this.bandList.getBand())

            //votar por la banda
            socket.on('votar-banda', (id)=>{
                this.bandList.increaseVotes(id)
                this.io.emit( 'current-band' , this.bandList.getBand() );

            })

            socket.on('borrar-banda', (id)=>{
                this.bandList.removeBand(id)
                this.io.emit( 'current-band' , this.bandList.getBand() );

            })

            socket.on('cambiar-nombre', ({id, name})=>{
                this.bandList.changeName(id, name)
                this.io.emit( 'current-band' , this.bandList.getBand() );

            })

            socket.on('crear-banda', (name)=>{
                this.bandList.addBand(name)
                this.io.emit( 'current-band' , this.bandList.getBand() );

            })

            socket.on('disconnect', () => {
                console.log('Usuario desconectado');

            });
        });


    }

}
module.exports = Sockets;