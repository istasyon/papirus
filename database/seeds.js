const faker = require('faker');
const createUser = require('./queries/CreateUser');

const FAKE_USER_COUNT = 10000;

const platforms = ['ONLINE', 'LOCAL', 'BOTH'];
const categories = [
  'Tennis',
  'Basketball',
  'Football',
  'Math',
  'Music',
  'Chess',
  'Russian',
  'English',
  'German',
  'Yoga'
];

function addUser() {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    birthday: faker.date.between('1967-01-01', '1999-12-31'),
    email: faker.internet.email(),
    imageUrl: faker.image.avatar(),
    isTutor: true,
    applicationStatus: 'ACCEPTED',
    applicationDate: Date.now(),
    platform: platforms[Math.floor(Math.random() * 3)],
    teachingSubjects: categories[Math.floor(Math.random() * categories.length)],
    videoUrl: 'https://www.youtube.com/embed/7q6YekNTwHA',
    description: faker.lorem.text(),
    experience: faker.lorem.text(),
    education: faker.lorem.text(),
    hourlyRate: Math.floor(Math.random() * 41 + 20),
    rating: Math.floor(Math.random() * 4 + 2),
    location: {
      type: 'Point',
      coordinates: [faker.address.longitude(), faker.address.latitude()]
    }
  };
}

for (let i = 0; i <= FAKE_USER_COUNT; i++) {
  createUser(addUser());
}
