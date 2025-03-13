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
    this.fuelEfficiency = car.fuelEfficiency / 100;

    this.gasTank = function () {
      if (this.tankCapacity == this.gasLeft * this.tankCapacity) {
        return "Tank is Full";
      }
      return this.gasLeft * this.tankCapacity + "L left in the tank";
    };

    this.drive = function (km) {
      let gasNeeded = (km * this.fuelEfficiency) / this.tankCapacity;

      if (this.gasLeft >= gasNeeded) {
        this.gasLeft -= gasNeeded;
        return `You drove ${km}km. ${this.gasTank()}`;
      } else {
        return `You need more fuel. The trip requires ${
          gasNeeded * this.tankCapacity
        }L, but you only have ${this.gasTank()}.`;
      }
    };

    this.fillUp = function (litres) {
      let fuelInLiters = this.gasLeft * this.tankCapacity;
      if (fuelInLiters + litres >= this.tankCapacity) {
        this.gasLeft = 1; // Tank is full
        return "Gas Tank is Full";
      } else {
        this.gasLeft += litres / this.tankCapacity;
        return this.gasTank();
      }
    };
    this.distanceLeft = function () {
      const fuelAvailable = this.gasLeft * this.tankCapacity; // Liters left

      console.log(
        this.gasLeft * this.tankCapacity +
          "L Left" +
          " " +
          Math.round(fuelAvailable * (1 / this.fuelEfficiency)) +
          "km Left"
      ); // Distance left
      return;
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

const matrix = new Car({
  manufacture: "Toyota",
  name: "Matrix",
  tankCapacity: 50,
  gasLeft: 1,
  fuelEfficiency: 6.2,
});

// manufacture: "Toyota", name: 'Matrix', tankCapacity:50, gasLeft:1, fuelEfficiency: 6.2
