//Dependencias de interface, rutas y elementos útiles del contrato
import React, { Component } from  'react';
import { Table, Button, Message } from  'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaing from '../ethereum/campaign';
import { Router, Link } from '../routes';
import currentIP from '../ip.js'

//Componente principal que renderiza la fila que contiene información de cada solicitud
class RequestRow extends Component {

  //Variable 'state' que guarda los datos de 'loading' y mensaje de erroe cuando se haga click en 'Aprobar','Rechazar' o 'Finalizar'
  state = {
    loading: false,
    errorMessage: ''
  };

  //Función que convierte una fecha en Epoch en formato standard
  epochToDate (epoch) {
      let date = new Date(epoch*1000);
      let formattedDate = date.getUTCDate() + '-' + (date.getUTCMonth() + 1)+ '-' + date.getUTCFullYear();
      return formattedDate;
  }

  //Función llamada al hacer click en el botón "Aprobar"
  onApprove = async () => {

    //Se obtiene la instancia del contrato actual dada la dirección desde la ruta
    const campaign =  Campaing(this.props.address);

    //Se activa el atributo 'Loading' del botón mientras que se procesa la transacción en la red
    this.setState({ loading: true, errorMessage: '' })

    try {

      //Se obtiene la cuenta actual de Metamask
      const accounts = await web3.eth.getAccounts();

      //Se llama al método 'approveRequest' del contrato
      await campaign.methods.approveRequest(this.props.id).send({
        from: accounts[0]
      });

      //Se realiza la solicitud al servidor donde se encuentra la base de datos MongoDB para que guarde la información de la aprobación realizada
      fetch('http://' + currentIP  + ':8000/approved', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          campaign: this.props.address,
          approverAddress: accounts[0],
          id: this.props.id
        })
      })

      //Finalizada la transacción, se recarga la página para que el usuario vea su aprobación o rechazo renderizado
      Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
    } catch (err) {

      //En caso de que ocurra un error, se crear el mensaje de error que se mostrará al usuario
      this.setState( {errorMessage: err.message} );
    }

    //Finalmente, termina el proceso de 'Loading' del botón
    this.setState({ loading: false, errorMessage: '' })
  };

  //Función llamada al hacer click en el botón "Rechazar"
  onReject = async () => {

    //Se obtiene la instancia del contrato actual dada la dirección desde la ruta
    const campaign =  Campaing(this.props.address);

    //Se activa el atributo 'Loading' del botón mientras que se procesa la transacción en la red
    this.setState({ loading: true, errorMessage: '' })

    try {

      //Se obtiene la cuenta actual de Metamask
      const accounts = await web3.eth.getAccounts();

      //Se llama al método 'rejectRequest' del contrato
      await campaign.methods.rejectRequest(this.props.id).send({
        from: accounts[0]
      });

      //Se realiza la solicitud al servidor donde se encuentra la base de datos MongoDB para que guarde la información del rechazo realizado
      fetch('http://' + currentIP  + ':8000/rejected', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          campaign: this.props.address,
          approverAddress: accounts[0],
          id: this.props.id
        })
      })

      //Finalizada la transacción, se recarga la página para que el usuario vea su aprobación o rechazo renderizado
      Router.replaceRoute(`/campaigns/${this.props.address}/requests`);

    } catch (err) {
      //En caso de que ocurra un error, se crear el mensaje de error que se mostrará al usuario
      this.setState( {errorMessage: err.message} );
    }

    //Finalmente, termina el proceso de 'Loading' del botón
    this.setState({ loading: false, errorMessage: '' })


  };

  onFinalize = async () => {

    //Se obtiene la instancia del contrato actual dada la dirección desde la ruta
    const campaign =  Campaing(this.props.address);

    //Se activa el atributo 'Loading' del botón mientras que se procesa la transacción en la red
    this.setState({ loading: true, errorMessage: '' })

    try {

      //Se obtiene la cuenta actual de Metamask
      const accounts = await web3.eth.getAccounts();

      //Se llama al método 'finalizeRequest' del contrato
      await campaign.methods.finalizeRequest(this.props.id).send({
        from: accounts[0]
      });

      //Se realiza la solicitud al servidor donde se encuentra la base de datos MongoDB para que guarde la información de la finalización realizada
      fetch('http://' + currentIP  + ':8000/finalized', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          campaign: this.props.address,
          campaignManager: accounts[0],
          id: this.props.id
        })
      })

      //Finalizada la transacción, se recarga la página para que el usuario vea su aprobación o rechazo renderizado
      Router.replaceRoute(`/campaigns/${this.props.address}/requests`);

    } catch (err) {

      //En caso de que ocurra un error, se crear el mensaje de error que se mostrará al usuario
      this.setState( {errorMessage: err.message});
    }

    //Finalmente, termina el proceso de 'Loading' del botón
    this.setState({ loading: false, errorMessage: '' });


  };

  render(){

    //En el método render, asignamos varibales de importancia que darán información al usuario con respecto a cada solicitud
    const { Row, Cell } = Table;
    const {id, request, approversCount, approvalRate, rejectedRate} = this.props;

    //Validación sobre si la solicitud está lista para ser aprobada, se mostrará de color verde si este valor es 'true'
    const readyToApprove = request.approvalCount > approversCount*(approvalRate)/100;

    //Validación sobre si la solicitud está lista para ser rechazada, se mostrará en color naranja si este valor es 'true'
    const readyToReject = request.rejectsCount > approversCount*(rejectedRate)/100;

    //Se obtiene la fecha actual, y se verifica si la solicitud está expirada, en caso afirmativo, la solicitud se mostrará en color rojo
    const currentTime =  Math.floor((new Date).getTime()/1000);
    const expired = ((request.created - currentTime + 604800) < 0);
    console.log(expired);

    return(
      <Row  positive={readyToApprove && !request.complete} negative={expired} warning={readyToReject && !request.complete}>
        <Cell disabled={request.complete}> {id} </Cell>
        <Cell disabled={request.complete} collapsing = {true}> {this.epochToDate(request.created)} </Cell>
        <Cell disabled={request.complete} collapsing = {true} > {this.epochToDate(parseFloat(request.created) + 604800)} </Cell>
        <Cell disabled={request.complete}> {request.description} </Cell>
        <Cell disabled={request.complete}> {web3.utils.fromWei(request.value, 'ether')} </Cell>
        {/* Link que dirige al usuario a la página de chequeo de cuentas en tiempo real de Ethereum */}
        <Cell> <Link route={`https://rinkeby.etherscan.io/address/${request.recipient}`}>
                  <a target="_blank">
                      {request.recipient}
                  </a>
                </Link>
        </Cell>
        <Cell disabled={request.complete}> {request.approvalCount}/{approversCount} </Cell>
        <Cell disabled={request.complete}> {request.rejectsCount}/{approversCount} </Cell>
        <Cell disabled={request.complete}>
          {request.complete ? null: (
              <Button color='red' basic onClick={this.onReject} loading={this.state.loading}>
                  Rechazar
              </Button>
            )
          }
        </Cell>
        <Cell disabled={request.complete}>
          {request.complete ? null: (
              <Button color='green' basic onClick={this.onApprove} loading={this.state.loading}>
                  Aprobar
              </Button>
            )
          }
        </Cell>
        <Cell disabled={request.complete}>
        {request.complete ? null: (
            <Button color='teal' basic onClick={this.onFinalize} loading={this.state.loading}>
              Finalizar
            </Button>
          )

        }
        </Cell>

      </Row>
    );
  }

}

export default RequestRow
