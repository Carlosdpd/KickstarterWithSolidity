//Dependencias necesarias
const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

//Contruir la ruta donde se guardarán el ABI y el Bytecode del contrato compilado
const buildPath = path.resolve(__dirname, "build");

//Se vacía el contenido del directorio
fs.removeSync(buildPath);

//Se obtiene la ruta del contrato
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');

//Lectura del directorio dada su ruta
const source = fs.readFileSync(campaignPath, 'utf8');

//Compilación, se utiliza la librería 'solc'
const output = solc.compile(source, 1).contracts;

//Verificación de que el directortio existe, si no existe, es creado
fs.ensureDirSync(buildPath);

//Iteración sobre 'output', se crea un elemento JSON por cada objeto del 'output'.
for( let contract in output){
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}
