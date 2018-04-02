import React, { Component } from  'react';
import { Table, Button, Message } from  'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaing from '../ethereum/campaign';
import { Router } from '../routes';

class RequestRow extends Component {

  state = {
    loading: false,
    errorMessage: ''
  }

  onApprove = async () => {

    const campaign =  Campaing(this.props.address);

    this.setState({ loading: true, errorMessage: '' })

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.approveRequest(this.props.id).send({
        from: accounts[0]
      });

      Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
    } catch (err) {
      this.setState( {errorMessage: err.message} );
    }

    this.setState({ loading: false, errorMessage: '' })


  };

  onFinalize = async () => {

    const campaign =  Campaing(this.props.address);

    this.setState({ loading: true, errorMessage: '' })

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.finalizeRequest(this.props.id).send({
        from: accounts[0]
      });

      Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
    } catch (err) {
      this.setState( {errorMessage: err.message})
    }

    this.setState({ loading: false, errorMessage: '' })


  };

  render(){

    const { Row, Cell } = Table;
    const {id, request, approversCount} = this.props;
    const readyToFinalize = request.approvalCount > approversCount/2;

    return(
      <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
        <Cell> {id} </Cell>
        <Cell> {request.description} </Cell>
        <Cell> {web3.utils.fromWei(request.value, 'ether')} </Cell>
        <Cell> {request.recipient} </Cell>
        <Cell> {request.approvalCount}/{approversCount} </Cell>
        <Cell>
          {request.complete ? null: (
              <Button color='green' basic onClick={this.onApprove} loading={this.state.loading}>
                  Aprobar
              </Button>
            )
          }
        </Cell>
        <Cell>
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
