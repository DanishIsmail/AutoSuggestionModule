const faker = require("faker");

const generateCarData = () => {
  const carData = [];

  for (let i = 0; i < 100; i++) {
    const car = {
      name: faker.vehicle.vehicle(),
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      year: faker.date.past().getFullYear(),
      price: faker.random.number({ min: 10000, max: 50000 }),
    };

    carData.push(car);
  }

  return carData;
};

// const carData = generateCarData();
// console.log(carData);

// module.exports = { generateCarData };
