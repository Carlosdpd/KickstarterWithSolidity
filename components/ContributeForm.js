//Dependencias de interface, rutas y elementos útiles del contrato
import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

//Componente principal que renderiza el formulation para contribuir a una campaña
class ContributeForm extends Component {

  //Variable 'state' que guardará los datos desde el formulario
  state = {
    value:'',
    errorMessage:'',
    loading: false
  };

  //Función llamada al hacer click en el botón 'Contribuir'
  onSubmit = async (event) => {

    //Eliminar el comportamiento por defecto de la función
    event.preventDefault();

    //Se obtiene una instancia de la campaña actual mediante el pase de parámetros ocurrido en 'show.js'
    const campaign = Campaign(this.props.address);

    //Se activa el atributo 'Loading' del botón mientras que se procesa la transacción en la red
    this.setState( {loading: true, errorMessage:'' } );

    //Se obtiene la cuenta actual de Metamask
    const accounts = await web3.eth.getAccounts();

    try {

      //Se llama al método 'contribute' del contrato actual, con los valores obtenidos desde el input de 'Contribuir'
      await campaign.methods.contribute().send({
        from:accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });

      //Se realiza la solicitud al servidor donde se encuentra la base de datos MongoDB para que guarde la información de la contribución realizada
      fetch('http://192.168.2.9:8000/contribution', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          campaignAddress: this.props.address,
          value: web3.utils.toWei(this.state.value, 'ether'),
          fromAddress: accounts[0]
        })
      })

      //Una vez realizada la contribución, se actualiza la página actual para que el usuario pueda verale
      Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (err) {

      //En caso de que ocurra un error, se crear el mensaje de error que se mostrará al usuario
      this.setState({ errorMessage: ['Asegúrese de ingresar un número válido de ether o wei(Sin letras)', 'En caso de ser una lista, no deje elementos en blanco', 'Verifique estar usando su plug-in Metamask', 'Verifique su lista de transacciones pendientes'] });

    }

    //Finalmente, termina el proceso de 'Loading' del botón
    this.setState({loading: false, value:'' });
  }

  render(){
    return(

      {/* Formulario de un solo campo que rellena el usuario para contribuir a una campaña, inicialmente no tiene mensaje de error */}
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label> Monto de contribución </label>

          {/* Ingresar el monto de la contribución */}
          <Input
            placeholder='Cantidad de ether con la que desea contribuir'
            value={this.state.value}
            onChange= {event => this.setState({ value:event.target.value })}
            label='ether'
            labelPosition='right'
          />
        </Form.Field>

        {/* Mensaje de error que toma la lista de errores desde la función 'onSubmit' */}
        <Message error header='Hubo un error, tome en cuenta las siguientes consideraciones' list={this.state.errorMessage} />

        {/* Botón 'Contribuir' */}
        <Button primary loading={this.state.loading}>
          ¡Contribuir!
        </Button>
      </Form>
    )


  }

};

export default ContributeForm;
