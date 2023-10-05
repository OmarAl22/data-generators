const faker = require('faker');

const generateClassroom = () => {
  const classroomData = {
    version: faker.datatype.number(),
    name: faker.random.word(),
    calendarUrl: faker.internet.url(),
    courseFolder: {
      id: faker.datatype.uuid(),
      name: faker.random.word(),
      openUrl: faker.internet.url(),
    },
    photoUrl: faker.image.imageUrl(),
    courseState: faker.random.arrayElement(['ACTIVE', 'ARCHIVED']),
    owner: {
      name: {
        fullName: faker.name.findName(),
      },
      emailAddress: faker.internet.email(),
    },
    teachers: [
      {
        profile: {
          name: {
            fullName: faker.name.findName(),
          },
          emailAddress: faker.internet.email(),
        },
      },
    ],
  };

  return classroomData;
};

const classroomData = generateClassroom();
const json = JSON.stringify(classroomData, null, 2);
console.log(json);
