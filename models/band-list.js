const Band = require("./band");

class BandList {
    constructor (){
        this.band=[
            new Band('AudioSlave'),
            new Band('Linkin park'),
            new Band('BBS Paranoicos'),
            new Band('De Saloon'),
            new Band('Coldplay')
        ]
    }

    addBand(name){
        const newBand = new Band(name)
        this.band.push(newBand)
        console.log(newBand)
        return this.band

  
    }


    removeBand(id){
        this.band = this.band.filter(band => band.id !==id)

    }

    getBand(){
        return this.band
    }

    increaseVotes(id){
        this.band = this.band.map(band => {
            if(band.id === id){
                band.vote += 1

            }
            return band
            
        })
    }
    

    changeName(id, newName){
        this.band = this.band.map(band => {
            if(band.id === id){
                band.name = newName

            }
            return band
        })
    }


}

module.exports = BandList