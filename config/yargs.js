const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    describe:"es la base de multiplicar",
    demandOption: true
  })
  .option("l", {
    alias: "listar",
    describe:"muestra la tobla en consola",
    type: "boolean",
    default:false
  })
  .option("h", {
    alias: "hasta",
    describe:"numero maximo de la tabla a multiplicar",
    type: "number",
    default:10
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw "la base tiene que ser un numero";
    }
    return true;
  }).argv;

  module.exports = argv;