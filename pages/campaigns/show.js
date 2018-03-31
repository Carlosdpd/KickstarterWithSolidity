import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component{

  static async getInitialProps(props){

    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    if (summary[1] == '0') {
      summary[1] = '-'
    }

    if (summary[2] == '0') {
      summary[2] = '-'
    }

    const accounts = await web3.eth.getAccounts();

    const alreadyContributed = await campaign.methods.approvers(accounts[0]).call();

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      maximumContribution: summary[1],
      maximumContributors: summary[2],
      balance: summary[3],
      requestCount: summary[4],
      approversCount: summary[5],
      manager: summary[6],
      contributed: alreadyContributed
    };
  }

  renderCards() {

    const {
      balance,
      manager,
      minimumContribution,
      maximumContribution,
      maximumContributors,
      requestCount,
      approversCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Direccion del gerente',
        description: 'Gerente que creo la campaña, puede crear solicitudes y enviar dinero de la campaña.',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: minimumContribution,
        meta: 'Contribucion minima (wei)',
        description: 'Para convertirse en contribuyente debe aportar al menos esta cantidad de wei.'
      },
      {
        header: maximumContribution,
        meta: 'Contribucion maxima (wei)',
        description: 'Para convertirse en contribuyente debe aportar como maximo esta cantidad de wei.'
      },
      {
        header: maximumContributors ,
        meta: 'Cantidad maxima de contribuyentes',
        description: 'Numero maximo de contribuyentes que pueden aportar a esta campaña.'
      },
      {
        header: requestCount,
        meta: 'Numero de solicitudes',
        description: 'Una solicitud envia fondos de la campaña acual. Las solicitudes deben ser aprobadas por los contribuyentes.'
      },
      {
        header: approversCount,
        meta: 'Numero de contribuyentes',
        description: 'Cantidad de personas que han contribuido a esta campaña.'
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Balance de la campaña (ether)',
        description: 'El balance de la campaña es cuanto dinero tiene esta campaña para gastar.'
      }
    ];

    return <Card.Group items={items} />
  };

  render(){
    return(
      <Layout>
        <h3> Informacion de la campaña </h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              {this.renderCards()}

            </Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} alreadyContributed={this.props.contributed} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
            <Link route={`/campaigns/${this.props.address}/requests`}>
              <a>
                <Button primary>
                  Ver solicitudes
                </Button>
              </a>
            </Link>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
