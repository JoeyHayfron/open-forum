const sum = (a, b) => a + b;

const POSTS = [
  {
    id: 1,
    title: 'Helo World',
    message: 'My Poem is entitlted......................',
    postedBy: 'Kwame Minta',
    category: 'barcelona',
    timestamp:
      new Date().getDate() +
      '-' +
      sum(new Date().getMonth(), 1) +
      '-' +
      new Date().getFullYear(),
  },
  {
    id: 6,
    title: 'Helo World',
    message: 'My Poem is entitlted......................',
    postedBy: 'Kwame Minta',
    category: 'barcelona',
    timestamp:
      new Date().getDate() +
      '-' +
      sum(new Date().getMonth(), 1) +
      '-' +
      new Date().getFullYear(),
  },
  {
    id: 2,
    title: 'Helo World',
    message: 'My Poem is entitlted......................',
    postedBy: 'Kwame Minta',
    category: 'black-lives-matter',
    timestamp:
      new Date().getDate() +
      '-' +
      sum(new Date().getMonth(), 1) +
      '-' +
      new Date().getFullYear(),
  },
  {
    id: 3,
    title: 'Helo World',
    message: 'My Poem is entitlted......................',
    postedBy: 'Kwame Minta',
    category: 'lionel-messi',
    timestamp:
      new Date().getDate() +
      '-' +
      sum(new Date().getMonth(), 1) +
      '-' +
      new Date().getFullYear(),
  },
  {
    id: 4,
    title: 'Helo World',
    message: 'My Poem is entitlted......................',
    postedBy: 'Kwame Minta',
    category: 'manchester-united',
    timestamp:
      new Date().getDate() +
      '-' +
      sum(new Date().getMonth(), 1) +
      '-' +
      new Date().getFullYear(),
  },
  {
    id: 5,
    title: 'Helo World',
    message: 'My Poem is entitlted......................',
    postedBy: 'Kwame Minta',
    category: 'christiano-ronaldo',
    timestamp:
      new Date().getDate() +
      '-' +
      sum(new Date().getMonth(), 1) +
      '-' +
      new Date().getFullYear(),
  },
];

export default POSTS;
