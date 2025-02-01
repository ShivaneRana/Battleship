const {Ship} = require('../module/ship.js');

describe("Ship class",() => {

    test("Ship class is defined",() => {
        expect(Ship).toBeDefined();
    })

    test("Ship class has lenght,hitTaken and Sank",() => {
        expect(new Ship().length).toBeDefined();
        expect(new Ship().hitTaken).toBeDefined();
        expect(new Ship().sank).toBeDefined();
    })

    
})