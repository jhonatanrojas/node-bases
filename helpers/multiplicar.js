
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (argv) =>{

    let salida, consola ='';


for (let index = 1; index <= argv.h; index++) {
   
   consola +=  `${colors.blue(argv.base)} ${colors.red(' x ')}  ${index} = ${colors.green(argv.base * index)} \n`;

   salida +=  `${argv.base}  x   ${index} = ${argv.base * index} \n`;
    
}

if(argv.l)
console.log(consola)



return  fs.writeFileSync(`./salida/tabla-${argv.base}.txt`,salida);

 

}
 module.exports = {
    crearArchivo
 }