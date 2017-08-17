const faker = require('faker');

const platforms = ['ONLINE', 'LOCAL', 'BOTH'];
const categories = [
  "Tennis",
  "Basketball",
  "Football",
  "Math",
  "Music",
  "Chess",
  "Russian",
  "English",
  "German",
  "Yoga"
];

function createUser() {
  return {
    firstName: faker.name.findName(),
    lastName: faker.name.findName(),
    birthday: faker.date.between('1967-01-01', '1999-12-31'),
    email: faker.internet.email(),
    image: faker.image.avatar(),
    isTutor: true,
    applicationStatus: 'ACCEPTED',
    applicationDate: Date.now(),
    platform: platforms[Math.floor(Math.random() * 3)],
    teachingSubjects: categories[Math.floor(Math.random() * categories.length())],
    videoUrl: 'https://www.youtube.com/embed/7q6YekNTwHA',
    description: faker.lorem.text(),
    experience:

    genre: getGenre(),
    website: faker.internet.url(),
    netWorth: randomBetween(0, 5000000),
    labelName: faker.company.companyName(),
    retired: faker.random.boolean(),
    albums: getAlbums()
  };
}
