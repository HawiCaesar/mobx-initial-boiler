import faker from 'faker';

export default () => {
    const todos = [];

    for (let i = 0; i<= 10; i++) {
        todos.push({
            id: faker.random.number(),
            title: faker.lorem.word(),
            finished: false
        })
    }
    return todos;
}