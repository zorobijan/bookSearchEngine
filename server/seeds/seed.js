const db = require('../config/connection');
const { Tech } = require('../models');

const techData = require('./userData.json');

db.once('open', async () => {
  await Tech.deleteMany({});

  const technologies = await Tech.insertMany(userData);

  console.log('Technologies seeded!');
  process.exit(0);
});
