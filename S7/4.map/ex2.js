const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

let userNames = (users.map(user => user.name[0] === 'A' ? 'Anacleto' : user.name));

console.log(userNames);