const faker = require('faker');

const generateTask = () => {
  const taskId = faker.datatype.uuid();
  const taskTitle = faker.lorem.sentence();
  const taskStatus = faker.random.arrayElement(['needsAction', 'completed']);
  const createdDate = faker.date.past().toISOString();
  const updatedDate = faker.date.recent().toISOString();

  return {
    kind: "tasks#task",
    created: createdDate,
    id: taskId,
    title: taskTitle,
    task_type: "PERSONAL_TASK",
    updated: updatedDate,
    selfLink: `https://www.googleapis.com/tasks/v1/lists/${taskId}/tasks/${taskId}`,
    status: taskStatus
  };
};

const generateTaskList = () => {
  const taskListId = faker.datatype.uuid();
  const taskListTitle = faker.lorem.words();
  const updatedDate = faker.date.recent().toISOString();

  const tasks = Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, generateTask);

  return {
    kind: "tasks#tasksList",
    items: [{
      kind: "tasks#tasks",
      id: `${taskListId}:0`,
      title: taskListTitle,
      updated: updatedDate,
      items: tasks,
      selfLink: `https://www.googleapis.com/tasks/v1/users/@me/lists/${taskListId}`
    }]
  };
};

const tasksHistory = generateTaskList();

const json = JSON.stringify(tasksHistory, null, 2);

console.log(json);
