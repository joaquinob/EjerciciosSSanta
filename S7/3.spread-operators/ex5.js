const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

const colorsCopy = [...colors];
colorsCopy.splice(1,1);

console.log(colors);
console.log(colorsCopy);