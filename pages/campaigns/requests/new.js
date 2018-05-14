//Dependencias de interface, rutas y elementos útiles del contrato
import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from  '../../../routes';
import Layout from '../../../components/Layout';
import currentIP from '../../../ip.js'


//Componente principal que renderiza el formulario para crear una solicitud nueva
class RequestNew extends Component{

  //Variable 'state' que guardará los datos desde el formulario
  state = {
      value:'',
      description:'',
      recipient:'',
      loading: false,
      errorMessage: ''
  };

  //Función que obtiene los parámetros iniciales del componente
  static async getInitialProps(props){

    //Se obtiene la dirección actual del contrato desde la ruta
    const { address } = props.query;
    return { address };

  };

  //Función llamada al hacer click en el botón "Crear"
  onSubmit = async event => {

    //Eliminar el comportamiento por defecto de la función
    event.preventDefault();

    //Se obtiene la instancia de la campaña con la que se está trabajando dada una dirección
    const campaign = Campaign(this.props.address);

    //Se obtienen las variables desde el formulario
    const { description, value, recipient } = this.state;

    //Se activa el atributo 'Loading' del botón mientras que se procesa la transacción en la red
    this.setState({ loading: true, errorMessage: '' })

    try {

        //Se obtiene la cuenta actual de Metamask
        const accounts = await web3.eth.getAccounts();

        //Se llama al método 'createRequest' del contrato actual y se le pasan los parámetros obtenidos desde el formulario
        await campaign.methods.createRequest(description, web3.utils.toWei(value, 'ether'), recipient)
        .send({ from: accounts[0] });

        //Se realiza la solicitud al servidor donde se encuentra la base de datos MongoDB para que guarde la información de la solicitud recién creada
        fetch('http://' + currentIP  + ':8000/request', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            campaignManager: accounts[0],
            toAddress: recipient,
            value: web3.utils.toWei(value, 'ether'),
            description: description,
            createdAt: Date.now()
          })
        });

        //Una creada la solicitud, se redirige al usuario a la lista de solicitudes
        Router.pushRoute(`/campaigns/${this.props.address}/requests`);

    } catch (err) {

      //En caso de que ocurra un error, se crear el mensaje de error que se mostrará al usuario
      this.setState({ errorMessage: ['Asegúrese de ingresar un número válido de ether o wei (Sin letras)', 'En caso de ser una lista, no deje elementos en blanco', 'Verifique estar usando su plug-in Metamask', 'Verifique su lista de transacciones pendientes'] })
    }

    //Finalmente, termina el proceso de 'Loading' del botón
    this.setState({ loading: false })

  };

  render(){
    return(
      <Layout>

        {/* Botón para volver a la lista de solicitudes */}
        <Link route={`/campaigns/${this.props.address}/requests`}>
          <a>
              Atras
          </a>
        </Link>

        <h3> Crear una nueva solicitud </h3>

        {/* Formulario que rellena el usuario para crear una solicitud, inicialmente no tiene mensaje de error */}
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label> Descripción </label>

            {/* Ingresar la descripción de la solicitud */}
            <Input
              placeholder='Descripción de su solicitud'
              value={this.state.description}
              onChange={event => this.setState({ description: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label> Monto en ether</label>

            {/* Ingresar el monto de la solicitud */}
            <Input
              labelPosition='right'
              label='ether'
              placeholder='Monto que desea retirar de la campaña'
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
             />
          </Form.Field>
          <Form.Field>
            <label> Destino </label>

            {/* Ingresar la dirección destino la solicitud */}
            <Input
              placeholder='Dirección destino a la que irán los fondos de su solicitud'
              value={this.state.recipient}
              onChange={event => this.setState({ recipient: event.target.value })}
             />
          </Form.Field>

          {/* Mensaje de error que toma la lista de errores desde la función 'onSubmit' */}
          <Message error header='Hubo un error, tome en cuenta las siguientes consideraciones' list={this.state.errorMessage} />

          {/* Botón 'Crear' */}
          <Button primary loading={this.state.loading}>
            ¡Crear!
          </Button>
        </Form>
      </Layout>
    );
  }

}

export default RequestNew;
