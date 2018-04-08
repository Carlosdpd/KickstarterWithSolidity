import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from  '../../../routes';
import Layout from '../../../components/Layout';

class RequestNew extends Component{

  state = {
      value:'',
      description:'',
      recipient:'',
      loading: false,
      errorMessage: ''
  };

  static async getInitialProps(props){

    const { address } = props.query;

    return { address };

  };

  onSubmit = async event => {
    event.preventDefault();

    const campaign = Campaign(this.props.address);
    const { description, value, recipient } = this.state;

    this.setState({ loading: true, errorMessage: '' })

    try {
        const accounts = await web3.eth.getAccounts();

        await campaign.methods.createRequest(description, web3.utils.toWei(value, 'ether'), recipient)
        .send({ from: accounts[0] });

        fetch('http://192.168.2.9:8000/request', {
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
          })
        });

        Router.pushRoute(`/campaigns/${this.props.address}/requests`);

    } catch (err) {
      this.setState({ errorMessage: ['Asegúrese de ingresar un número válido de ether o wei (Sin letras)', 'En caso de ser una lista, no deje elementos en blanco', 'Verifique estar usando su plug-in Metamask', 'Verifique su lista de transacciones pendientes'] })
    }

    this.setState({ loading: false })

  };

  render(){
    return(
      <Layout>

        <Link route={`/campaigns/${this.props.address}/requests`}>
          <a>
              Atras
          </a>
        </Link>

        <h3> Crear una nueva solicitud </h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label> Descripción </label>
            <Input
              placeholder='Descripción de su solicitud'
              value={this.state.description}
              onChange={event => this.setState({ description: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label> Monto en ether</label>
            <Input
              placeholder='Monto que desea retirar de la campaña'
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
             />
          </Form.Field>
          <Form.Field>
            <label> Destino </label>
            <Input
              placeholder='Dirección destino a la que irán los fondos de su solicitud'
              value={this.state.recipient}
              onChange={event => this.setState({ recipient: event.target.value })}
             />
          </Form.Field>

          <Message error header='Hubo un error, tome en cuenta las siguientes consideraciones' list={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>
            ¡Crear!
          </Button>
        </Form>
      </Layout>
    );
  }

}

export default RequestNew;
