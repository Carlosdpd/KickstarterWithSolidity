import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router} from '../../routes';

class CampaignNew extends Component {

  state = {
    minimumContribution: '',
    maximumContribution: '',
    maximumCont:'',
    errorMessage: '',
    loading: false
  }

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(this.state.minimumContribution,
            this.state.maximumContribution,
            this.state.maximumCont).send({
          from: accounts[0]
      });

      const lastCampaing =  await factory.methods.getDeployedCampaigns().call();

      fetch('http://192.168.2.9:8000/campaign', {
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
          maximumCont: this.state.maximumCont
        })
      });

      Router.pushRoute('/');

    } catch (err) {

      this.setState({ errorMessage: ['Asegúrese de ingresar un número válido de ether o wei (Sin letras)', 'En caso de ser una lista, no deje elementos en blanco', 'Verifique estar usando su plug-in Metamask', 'Verifique su lista de transacciones pendientes'] });
    }

    this.setState({ loading: false });
  }

  render(){
    return(
      <Layout>
        <h3> Crear una campaña </h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label> Contribución mínima </label>
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
            <Input
              placeholder='Cantidad maxima de cotribuyentes que desea en su campaña, coloque 0 si no desea establecer un límite de contribuyentes'
              value={this.state.maximumCont}
              onChange={event => this.setState({ maximumCont: event.target.value })}
             />
          </Form.Field>

          <Message error header='Hubo un error, tome en cuenta las siguientes consideraciones' list={this.state.errorMessage} />
          <Button loading={this.state.loading} primary >¡Crear!</Button>
        </Form>
      </Layout>
    );
  }

}

export default CampaignNew;
