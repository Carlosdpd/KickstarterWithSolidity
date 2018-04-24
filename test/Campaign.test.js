//Dependencias necesarias
const assert = require('assert');

//Ganache permite crear nuestro propio ambiente Ethereum localmente
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

//Contratos a utilizar
const compiledFactory =  require('../ethereum/build/CampaignFactory.json');
const compiledCampaign =  require('../ethereum/build/Campaign.json');

//Lista de variables necesarias para el despligue
let accounts;
let factory;
let campaignAddress;
let campaign;

//Método llamado antes de realizar cada una de las pruebas, el método crea campañas automáticamente para realizar pruebas
beforeEach(async () => {

  //Se obtiene una cuenta que hará el despliegue del contrato 'CampaignFactory'
  accounts = await web3.eth.getAccounts();

  //Se crea la instancia del contrato 'CampaignFactory'
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface)).
    deploy({ data: compiledFactory.bytecode }).
    send({ from: accounts[0], gas: '2000000' });

  //Se crea una campaña utilizando la instancia recién creada
  await factory.methods.createCampaign('100',web3.utils.toWei('12', 'ether'),'0','50','50').send({
    from: accounts[0],
    gas: '2000000'
  });

  //Se obtienen las direcciones de todas las campañas creadas
  const addresses = await factory.methods.getDeployedCampaigns().call();
  campaignAddress = addresses[0];

  //Se crea una instancia del contrato a partir de la dirección
  campaign = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface), campaignAddress);

});

//Descripción de las pruebas
describe('Pruebas a campañas', () => {

  //Prueba que Instancia una CampaignFactory y una Campaña
  it('Instancia una CampaignFactory y una Campaña', () => {

    //Se verifica que ambas direcciones no sean NULL, asegurando su correcto despligue en la red local
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  //Prueba que Marca al que llama a la campaña como gerente
  it('Marca al que llama a la campaña como gerente', async () => {

    //Se llama al atributo 'manager' de la instancia del contrato y se compara con la dirección actual que presenta la red local
    const manager = await campaign.methods.manager().call();
    assert.equal( accounts[0],manager);
  });

  //Prueba que Permite a los usuarios contribuir y marcarlos como contribuyentes
  it('Permite a los usuarios contribuir y marcarlos como contribuyentes', async () => {

    //Se realiza una contribución a la campaña
    await campaign.methods.contribute().send({
      value: '200',
      from: accounts[1]
    });

    //Se llama al atributo approvers con la dirección que acaba de realizar la contribución
    const isContributor = await campaign.methods.approvers(accounts[1]).call();

    //El valor debe ser true
    assert(isContributor);

  });

  //Prueba que asegura de requerir una contribución mínima
  it('Asegura de requerir una contribución mínima', async () => {

    //Se realizar una contribución menor al monto mínimo establecido (100)
    try {
      await campaign.methods.contribute().send({
        value:'5',
        from: accounts[1]
      });
      //Si se llega a este punto de la prueba, es que algo malo ocurrió, la idea es que el catch se ejecute
      assert(false);
    } catch (err) {

      //Si el catch se ejecuta, hubo un fallo, lo cual es el comportamiento esperado
      assert(err);
    }
  });

  //Prueba que asegura que una contribución mínima no puede ser 0
  it('Asegura que una contribución mínima no puede ser 0', async () => {

    //Se realizar una contribución de 0
    try {
      await campaign.methods.contribute().send({
        value:'0',
        from: accounts[1]
      });
      //Si se llega a este punto de la prueba, es que algo malo ocurrió, la idea es que el catch se ejecute
      assert(false);
    } catch (err) {

      //Si el catch se ejecuta, hubo un fallo, lo cual es el comportamiento esperado
      assert(err);
    }
  });

  //Prueba que asegura de no sobrepasar la contribución máxima
  it('Asegura de no sobrepasar la contribución máxima', async () => {

    //Se realizar una contribución mayor al monto máximo establecido (10 ether)
    try {
      await campaign.methods.contribute().send({
        value:web3.utils.toWei('15', 'ether'),
        from: accounts[1]
      });
      //Si se llega a este punto de la prueba, es que algo malo ocurrió, la idea es que el catch se ejecute
      assert(false);
    } catch (err) {

      //Si el catch se ejecuta, hubo un fallo, lo cual es el comportamiento esperado
      assert(err);
    }
  });

  //Prueba que permite al gerente crear solicitudes
  it('Permite al gerente crear solicitudes', async () => {

    //Se llama al método 'createRequest'
    await campaign.methods.createRequest('Comprar baterías', '100', accounts[1]).send({
      from: accounts[0],
      gas: '1000000'
    });

    //Se obtiene la solicitud recién creada
    const request = await campaign.methods.requests(0).call();

    //Se verifica que la descripción de la solicitud sea 'Comprar baterías'
    assert.equal('Comprar baterías', request.description);
  });

  //Prueba que permite procesar solicitudes
  it('Procesar solicitudes', async () => {

    //Primero se realiza una contribución
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether')
    });

    //Se crea una solicitud
    await campaign.methods.createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1]).send({
      from:accounts[0],
      gas: '1000000'
    });

    //Se aprueba la solicitud recién creada
    await campaign.methods.approveRequest(0).send({
      from:accounts[0],
      gas: '1000000'
    });

    //Se finaliza la solicitud recién aprobada
    await campaign.methods.finalizeRequest(0).send({
      from:accounts[0],
      gas:'1000000'
    });

    //Se obtiene el balance de la cuenta destino
    let balance = await web3.eth.getBalance(accounts[1]);

    //El balance se pasa de wei a ether
    balance = web3.utils.fromWei(balance, 'ether');
    balance = parseFloat(balance);

    console.log(balance);

    //Se verifica que el balance sea mayor a lo que tenía en un principio
    assert(balance > 104);

  });

});
