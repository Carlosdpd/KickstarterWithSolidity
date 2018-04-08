import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Link } from '../../../routes';
import { Button, Table } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';
import web3 from '../../../ethereum/web3';

class RequestIndex extends Component {

  static async getInitialProps(props){
    const { address } = props.query;

    const campaign = Campaign(address);

    const accounts = await web3.eth.getAccounts();
    const currentAccount = accounts[0];
    const campaignManager = await campaign.methods.manager().call();
    const requestCount = await campaign.methods.getRequestCount().call();
    const approversCount = await campaign.methods.approversCount().call();

    const requests = await Promise.all(
      Array(parseInt(requestCount)).fill().map((element, index) => {
        return campaign.methods.requests(index).call();
      })
    );



    return { address, requests,requestCount, approversCount, campaignManager, currentAccount };
  }

  renderRows() {
    return this.props.requests.map((request, index) => {
      return <RequestRow
        key={index}
        id={index}
        request={request}
        address={this.props.address}
        approversCount={this.props.approversCount}

      />
    });
  }

  render(){

    const { Header, Row, HeaderCell, Body } = Table;

    return(
      <Layout>
          <h3> Solicitudes </h3>
          <Link route={`/campaigns/${this.props.address}/requests/new`}>
            <a>
              <Button primary floated='right' style={{ marginBottom:10 }} disabled={this.props.campaignManager != this.props.currentAccount}>
                Crear solicitud
              </Button>
            </a>
          </Link>

          <Table>
            <Header>
              <Row>
                <HeaderCell> ID </HeaderCell>
                <HeaderCell> Descripción </HeaderCell>
                <HeaderCell> Monto (ether) </HeaderCell>
                <HeaderCell> Destino </HeaderCell>
                <HeaderCell> Cuenta de aprobados </HeaderCell>
                <HeaderCell> Aprobar </HeaderCell>
                <HeaderCell> Finalizar </HeaderCell>
              </Row>
            </Header>
            <Body>
              {this.renderRows()}
            </Body>
          </Table>
          <div> Encontradas {this.props.requestCount} solicitudes. </div>

      </Layout>
    );
  }
}

export default RequestIndex;
