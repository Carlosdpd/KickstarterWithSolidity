import React, { Component } from  'react';
import { Table, Button, Message } from  'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaing from '../ethereum/campaign';
import { Router, Link } from '../routes';

class RequestRow extends Component {

  state = {
    loading: false,
    errorMessage: ''
  };

  epochToDate (epoch) {
      let date = new Date(epoch*1000);

      let formattedDate = date.getUTCDate() + '-' + (date.getUTCMonth() + 1)+ '-' + date.getUTCFullYear();

      return formattedDate;
  }


  onApprove = async () => {

    const campaign =  Campaing(this.props.address);

    this.setState({ loading: true, errorMessage: '' })

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.approveRequest(this.props.id).send({
        from: accounts[0]
      });

      fetch('http://192.168.2.9:8000/approved', {
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

      Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
    } catch (err) {
      this.setState( {errorMessage: err.message} );
    }

    this.setState({ loading: false, errorMessage: '' })


  };

  onReject = async () => {

    const campaign =  Campaing(this.props.address);

    this.setState({ loading: true, errorMessage: '' })

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.rejectRequest(this.props.id).send({
        from: accounts[0]
      });

      fetch('http://192.168.2.9:8000/approved', {
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

      fetch('http://192.168.2.9:8000/finalized', {
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

      Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
    } catch (err) {
      this.setState( {errorMessage: err.message})
    }

    this.setState({ loading: false, errorMessage: '' })


  };

  render(){

    const { Row, Cell } = Table;
    const {id, request, approversCount, approvalRate, rejectedRate} = this.props;
    const readyToApprove = request.approvalCount > approversCount*(approvalRate)/100;
    const readyToReject = request.rejectsCount > approversCount*(rejectedRate)/100;

    return(
      <Row  positive={readyToApprove && !request.complete} negative={readyToReject && !request.complete}>
        <Cell disabled={request.complete}> {id} </Cell>
        <Cell disabled={request.complete} collapsing = {true}> {this.epochToDate(request.created)} </Cell>
        <Cell disabled={request.complete}> {request.description} </Cell>
        <Cell disabled={request.complete}> {web3.utils.fromWei(request.value, 'ether')} </Cell>
        <Cell> <Link route={`https://rinkeby.etherscan.io/address/${request.recipient}`}>
                  <a>
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
        <Cell disabled={request.complete} collapsing = {true}> {this.epochToDate(parseFloat(request.created) + 604800)} </Cell>
      </Row>
    );
  }

}

export default RequestRow
