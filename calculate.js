// const calculate = {
//   add: (x, y) => {
//     return +x + +y;
//   },
//   sub: (x, y) => {
//     return x - y;
//   },
//   mul: (x, y) => {
//     return x * y;
//   },
//   pow: (x, y) => {
//     return x ** y;
//   },
// };

// window.cal = calculate

class calculate {
  add(x, y) {
    return +x + +y;
  }

  sub(x, y) {
    return x - y;
  }

  mul(x, y) {
    return x * y;
  }

  pow(x, y) {
    return x * y;
  }
}

class Product {
  constructor(product) {
    this.title = product.name;
    this.name = product.name.toLowerCase();
    this.price = product.price;
    this.id = Math.random();
    this.created = Date.now();
    this.updated = Date.now();
    this.update = function () {
      return (this.updated = Date.now());
    };
  }
}

const frontier = new Product({
  title: "Frontier",
  name: "Frontier",
  price: 1499,
});

const greatNorth = new Product({
  title: "Great North",
  name: "Great North",
  price: 3499,
});

class Car {
  constructor(car) {
    this.manufacture = car.manufacture;
    this.name = car.name;
    this.tankCapacity = car.tankCapacity;
    this.gasLeft = car.gasLeft;
    this.gasTank = function () {
       return (this.gasLeft * this.tankCapacity) + "L in the tank";
    };
    this.fuelEfficiency = car.fuelEfficiency / 100;
    this.drive = function (km) {
      let gasNeeded = km * this.fuelEfficiency;
      this.gasLeft < gasNeeded
        ? (this.gasLeft = this.gasLeft - gasNeeded)
        : console.log(
            "you need to fill up the trip will take: " +
              gasNeeded +
              "L. You have: " +
              this.gasTank +
              "L left."
          );
    };
    this.fillUp = function (litres) {
      this.tankCapacity > this.gasTank()
        ? this.tankCapacity <= litres
          ? (this.gasLeft =  1)
          : (this.gasLeft = litres / this.tankCapacity)
        : console.log("Gas Tank is Full");
    };
  }
}

const hyundai = new Car({
  manufacture: "Hyundai",
  name: "Elantra",
  gasLeft: 0.4,
  tankCapacity: 47,
  fuelEfficiency: 5.7,
});
