class Ship{
    constructor(){
        this.length = 5;
        this.hitTaken = 0;
        this.sank = false;
    }

    hit(){
        this.hitTaken++;
    }
}

module.exports = {
    Ship,
}