const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

//const toyMix = [toy{name, date, color}, toyUpdate{lights, power}];

const toyMix = {...toy, ...toyUpdate};

console.log(toyMix);