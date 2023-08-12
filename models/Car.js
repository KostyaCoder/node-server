let carsDb = [];

class Car {
  constructor(carData) {
    const {
      model,
      manufacturer,
      yearIssue,
      engineSize,
      bodyType,
      electricVehicles,
      photo,
    } = carData;

    (this.model = model),
      (this.manufacturer = manufacturer),
      (this.yearIssue = yearIssue),
      (this.engineSize = engineSize),
      (this.bodyType = bodyType),
      (this.electricVehicles = electricVehicles),
      (this.photo = photo);

    return Promise.resolve(this);
  }

  static async create(carData) {
    const newCar = await new Car(carData);
    newCar.id = Date.now();
    carsDb.push(newCar);
    return newCar;
  }

  static async findAll() {
    return carsDb;
  }

  static async findById(id) {
    const car = carsDb.find((x) => x.id === id);
    if (car) {
      return car;
    } else {
      throw new Error("Car not found");
    }
  }

  static async updateById(id, newValue) {
    const car = carsDb.find((x) => x.id === id);
    if (car) {
      for (const [key, value] of Object.entries(newValue)) {
        car[key] = value;
      }
    } else {
      throw new Error("Car not found");
    }
    return car;
  }

  static async deleteById(id) {
    const car = carsDb.find((x) => x.id === id);
    const newCarsDb = carsDb.filter((x) => x.id !== id);
    carsDb = newCarsDb;

    if (car) {
      return car;
    } else {
      throw new Error("Car not found");
    }
  }
}

module.exports = Car;
