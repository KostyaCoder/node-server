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
    return car ? car : "Error car not find";
  }
}

module.exports = Car;
