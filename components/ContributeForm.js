import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {

  state = {
    value:'',
    errorMessage:'',
    loading: false
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const campaign = Campaign(this.props.address);

    this.setState( {loading: true, errorMessage:'' } );

    const accounts = await web3.eth.getAccounts();

    try {

      await campaign.methods.contribute().send({
        from:accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });

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

      Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: ['Asegúrese de ingresar un número válido de ether o wei(Sin letras)', 'En caso de ser una lista, no deje elementos en blanco', 'Verifique estar usando su plug-in Metamask', 'Verifique su lista de transacciones pendientes'] });

    }

    this.setState({loading: false, value:'' });

  }

  render(){
    return(
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label> Monto de contribución </label>
          <Input
            placeholder='Cantidad de ether con la que desea contribuir'
            value={this.state.value}
            onChange= {event => this.setState({ value:event.target.value })}
            label='ether'
            labelPosition='right'
          />
        </Form.Field>
        <Message error header='Hubo un error, tome en cuenta las siguientes consideraciones' list={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>
          ¡Contribuir!
        </Button>
      </Form>
    )


  }

};

export default ContributeForm;
