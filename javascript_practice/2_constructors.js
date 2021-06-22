class User {
    constructor(first, last, e) {
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

let userOne = new User('Barry', 'Allen', 'ballen@elevenfifty.org');
console.log(userOne.first); // undefined
console.log(userOne.f); // Barry
console.log(userOne.l); // Allen
console.log(userOne); // User {f: 'Barry', l: 'Allen', email: 'ballen@elevenfifty.org'}

class Car {
    constructor(make, model, year) {
        this.ma = make;
        this.mo = model;
        this.yr = year;
    }
}

let carOne = new Car('Lexus', 'ES330', 2006);
console.log(carOne);