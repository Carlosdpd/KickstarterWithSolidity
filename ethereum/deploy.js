const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
//Gettin interface and bytecode from the compile file
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  //This is the mneumonic wich identifies our ethereum account.
  'sniff permit vehicle mixed help wink amazing dash balance moment antenna useless',
  'https://rinkeby.infura.io/O9rDBBXPQ0LgMzdxly6I'
);

const web3 = new Web3(provider);

const deploy  = async () => {
  //Get a list of all accounts associated to previous mneumonic
  accounts = await web3.eth.getAccounts();

  console.log('Deploying from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '2000000', from : accounts[0]});

  console.log('Contract deployed to:', result.options.address);


};
deploy();
