const pointsList = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];

//const pointListAdd = [pointsList + pointsList2];

const pointListAdd = [...pointsList, ...pointsList2];

console.log(pointListAdd);