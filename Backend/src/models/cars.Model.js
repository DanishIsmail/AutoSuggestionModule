const mongoose = require("mongoose"),
  faker = require("faker");

const carsDetailSchema = new mongoose.Schema({
  carName: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  carModel: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  priceRange: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const carsDetailObject = mongoose.model("carsDetails", carsDetailSchema);

const carsDetailsFind = async () => {
  const existingCarsCount = await carsDetailObject.countDocuments();

  if (!existingCarsCount || existingCarsCount == 0) {
    const carData = [];
    for (let i = 0; i < 300; i++) {
      const car = {
        carName: faker.vehicle.vehicle(),
        manufacturer: faker.vehicle.manufacturer(),
        carModel: faker.vehicle.model(),
        year: faker.date.past().getFullYear(),
        priceRange: faker.random.number({ min: 10000, max: 50000 }),
      };
      carData.push(car);
    }
    const result = await carsDetailObject.create(carData);
  }
};

carsDetailsFind();
