//Dependencias de interface, rutas y elementos útiles del contrato
import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router} from '../../routes';
import currentIP from '../../ip.js'

//Componente principal que renderiza el formulation para crear una campaña nueva
class CampaignNew extends Component {

  //Variable 'state' que guardará los datos desde el formulario
  state = {
    minimumContribution: '',
    maximumContribution: '',
    maximumCont:'',
    approveRate:'',
    rejectRate:'',
    errorMessage: '',
    loading: false
  }

  //Función llamada al hacer click en el botón "Crear"
  onSubmit = async (event) => {

    //Eliminar el comportamiento por defecto de la función
    event.preventDefault();

    //Se activa el atributo 'Loading' del botón mientras que se procesa la transacción en la red
    this.setState({ loading: true, errorMessage: '' });

    //Inicio de la transacción
    try {

      //Se obtiene la cuenta actual de Metamask
      const accounts = await web3.eth.getAccounts();

      //Se llama al método 'createCampaign' del contrato actual y se le pasan los parámetros obtenidos desde el formulario
      await factory.methods.createCampaign(this.state.minimumContribution,
            this.state.maximumContribution,
            this.state.maximumCont,
            this.state.approveRate,
            this.state.rejectRate,
          ).send({
          from: accounts[0]
      });

      //Se obtiene la lista de campañas creadas
      const lastCampaing =  await factory.methods.getDeployedCampaigns().call();

      //Se realiza la solicitud al servidor donde se encuentra la base de datos MongoDB para que guarde la información de la campaña recién creada
      fetch('http://' + currentIP  + ':8000/campaign', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          campaignManager: accounts[0],
          campaignAddress: lastCampaing[lastCampaing.length - 1],
          minimumContribution: this.state.minimumContribution,
          maximumContribution: this.state.maximumContribution,
          maximumCont: this.state.maximumCont,
          approveRate:this.state.approveRate,
          rejectRate:this.state.rejectRate
        })
      });

      //Una creada la campaña, se redirige al usuario a la página inicial donde podrá ver su campaña recién creada
      Router.pushRoute('/');

    } catch (err) {

      //En caso de que ocurra un error, se crear el mensaje de error que se mostrará al usuario
      this.setState({ errorMessage: ['Asegúrese de ingresar un número válido de ether o wei (Sin letras)', 'En caso de ser una lista, no deje elementos en blanco', 'Verifique estar usando su plug-in Metamask', 'Verifique su lista de transacciones pendientes'] });
    }

    //Finalmente, termina el proceso de 'Loading' del botón
    this.setState({ loading: false });
  }

  render(){
    return(
      <Layout>
        <h3> Crear una campaña </h3>

        {/* Formulario que rellena el usuario para crear una campaña, inicialmente no tiene mensaje de error */}
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label> Contribución mínima </label>

            {/* Ingresar la contribución mínima */}
            <Input
              placeholder='Cantidad mínima de wei con la que se puede contribuir a la campaña'
              labelPosition='right'
              label='wei'
              value={this.state.minimumContribution}
              onChange={event => this.setState({ minimumContribution: event.target.value })}
             />
          </Form.Field>

          <Form.Field>
            <label> Contribución máxima </label>

            {/* Ingresar la contribución máxima */}
            <Input
              placeholder='Cantidad máxima de wei con la que se puede contribuir a la campaña, coloque 0 si no desea establecer un límite máximo'
              labelPosition='right'
              label='wei'
              value={this.state.maximumContribution}
              onChange={event => this.setState({ maximumContribution: event.target.value })}
             />
          </Form.Field>

          <Form.Field>
            <label> Número máximo de contribuyentes </label>

            {/* Ingresar la cantidad máxima de contribuyentes */}
            <Input
              placeholder='Cantidad maxima de cotribuyentes que desea en su campaña, coloque 0 si no desea establecer un límite de contribuyentes'
              value={this.state.maximumCont}
              onChange={event => this.setState({ maximumCont: event.target.value })}
             />
          </Form.Field>

          <Form.Field>
            <label> Tasa de aprobación </label>

            {/* Ingresar la tasa de aprobación*/}
            <Input
              placeholder='Porcentaje de votos de aprobación necesarios para aprobar una solicitud, debe ser un número entre 1 y 99'
              value={this.state.approveRate}
              onChange={event => this.setState({ approveRate: event.target.value })}
             />
          </Form.Field>

          <Form.Field>
            <label> Tasa de rechazo </label>

            {/* Ingresar la tasa de rechazo*/}
            <Input
              placeholder='Porcentaje de votos de rechazo necesarios para rechazar una solicitud, debe ser un número entre 1 y 100'
              value={this.state.rejectRate}
              onChange={event => this.setState({ rejectRate: event.target.value })}
             />
          </Form.Field>

          {/* Mensaje de error que toma la lista de errores desde la función 'onSubmit' */}
          <Message error header='Hubo un error, tome en cuenta las siguientes consideraciones' list={this.state.errorMessage} />

          {/* Botón 'Crear' */}
          <Button loading={this.state.loading} primary >¡Crear!</Button>
        </Form>
      </Layout>
    );
  }

}

export default CampaignNew;
