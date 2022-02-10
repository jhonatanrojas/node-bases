

const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
console.clear();


 crearArchivo(argv)
             .then(msg => console.log(msg))
             .catch(err => console.log(err))


