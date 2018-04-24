//Dependencias necesarias
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

//Se obtiene el ABI y Bytecode
const compiledFactory = require('./build/CampaignFactory.json');

//Proveedor que se conectará a la red Ethereum para instanciar contratos (En este caso: Infura)
const provider = new HDWalletProvider(
  //"Mneumonic" que identifica la cuenta que se enlazará con el nodo Infura para crear la instancia en la red Ethereum
  'sniff permit vehicle mixed help wink amazing dash balance moment antenna useless',
  'https://rinkeby.infura.io/O9rDBBXPQ0LgMzdxly6I'
);

//Instancia de Web3, que recibe 'provider'
const web3 = new Web3(provider);

//Función que instanciará el contrato en la red
const deploy  = async () => {
  //Lista de cuentas asociadas al "Mneumonic" en 'provider'
  accounts = await web3.eth.getAccounts();

  //Se muestra por consola, la cuenta que hace despliegue en la red
  console.log('Desplegando desde la dirección: ', accounts[0]);

  //Creación del contrato en la red.
  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '2000000', from : accounts[0]});

  //Se muestra por pantalla la dirección donde el contrato fue creado.
  console.log('Contrato desplegado en :', result.options.address);

};

//Llamada a la función
deploy();
