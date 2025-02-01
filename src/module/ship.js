class Ship{
    constructor(){
        this.length = 3;
        this.hitTaken = 0;
        this.sank = false;
    }

    hit(){
        this.hitTaken++;
    }

    isSunk(){
        this.sank = this.hitTaken === this.length ? true : false;
        return this.sank;
    }
}

module.exports = {
    Ship,
}