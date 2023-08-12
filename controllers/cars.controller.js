const cars = [];

module.exports.createCar = async function (req, resp) {
  const { car } = req;
  car.id = Date.now();
  cars.push(car);
  resp.send(car);
};

module.exports.getCars = async function (req, resp) {
  resp.send(cars);
};

module.exports.cars = cars;
