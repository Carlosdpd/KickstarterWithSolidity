//Dependencias de interface, rutas y elementos útiles del contrato
import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

//Componente principal que renderiza las variables de importancia de un contrato
class CampaignShow extends Component{

  //Función que obtiene los parámetros iniciales del componente
  static async getInitialProps(props){

    //Se obtiene la instancia del contrato dada su dirección, obtenida desde la ruta
    const campaign = Campaign(props.query.address);

    //Se llama al método del contrato 'getSummary' que retorna un resumen de la campaña
    const summary = await campaign.methods.getSummary().call();

    //Si la contribución máxima es 0, se reemplaza por '-'
    if (summary[1] == '0') {
      summary[1] = '-'
    }

    //Si el número máximo de contribuyentes es 0, se reemplaza por '-'
    if (summary[2] == '0') {
      summary[2] = '-'
    }

    //Se obtiene la cuenta activa desde Metamask
    const accounts = await web3.eth.getAccounts();

    //Se retorna el objeto 'props' que contiene todos los atributos obtenidos de la campaña
    return {
      address: props.query.address,
      minimumContribution: summary[0],
      maximumContribution: summary[1],
      maximumContributors: summary[2],
      balance: summary[3],
      requestCount: summary[4],
      approversCount: summary[5],
      approvalRate: summary[6],
      rejectedRate: summary[7],
      manager: summary[8],
    };
  }

  //Método que renderiza los campos obtenidos del contrato en tarjetas sencillas de leer desde la interface
  renderCards() {

    //Se obtienen los datos desde 'props'
    const {
      balance,
      manager,
      minimumContribution,
      maximumContribution,
      maximumContributors,
      requestCount,
      approversCount,
      approvalRate,
      rejectedRate
    } = this.props;

    //Se crean los items de cada tarjeta, utilizando los objetos obtenidos desde 'props'
    const items = [
      {
        header: manager,
        meta: 'Dirección del gerente',
        description: 'Gerente que creó la campaña, puede crear solicitudes y enviar dinero de la campaña.',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: minimumContribution,
        meta: 'Contribución mínima (wei)',
        description: 'Para convertirse en contribuyente debe aportar al menos esta cantidad de wei.'
      },
      {
        header: maximumContribution,
        meta: 'Contribución máxima (wei)',
        description: 'Para convertirse en contribuyente puede aportar como máximo esta cantidad de wei.'
      },
      {
        header: maximumContributors ,
        meta: 'Cantidad máxima de contribuyentes',
        description: 'Número máximo de contribuyentes que pueden aportar a esta campaña.'
      },
      {
        header: requestCount,
        meta: 'Número de solicitudes',
        description: 'Una solicitud envía fondos de la campaña actual. Las solicitudes deben ser aprobadas por los contribuyentes.'
      },
      {
        header: approversCount,
        meta: 'Número de contribuyentes',
        description: 'Cantidad de personas que han contribuido a esta campaña.'
      },
      {
        //El objeto 'balance' está en escala Wei, se convierte a Ether con la función 'FromWei'
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Balance de la campaña (ether)',
        description: 'El balance de la campaña es cuanto dinero tiene esta campaña para gastar.'
      },
      {
        header: approvalRate + "%",
        meta: 'Tasa de aprobación',
        description: 'Tasa de votos de aprobación para aprobar una solicitud.'
      },
      {
        header: rejectedRate + "%",
        meta: 'Tasa de rechazo',
        description: 'Tasa de votos de rechazo para rechazar una solicitud.'
      }
    ];

    //Se retornan las tarjetas con los datos asignados
    return <Card.Group items={items} />
  };

  render(){
    return(
      <Layout>
        <h3> Información de la campaña </h3>
        <Grid>

          {/* Grid que contiene la lista de tarjetas y el componente de contribución a campañas */}
          <Grid.Row>
            <Grid.Column width={10}>
              {this.renderCards()}
            </Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm address={this.props.address}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>

            {/* Botón que lleva a la lista de solicitudes, según la dirección establecida en la ruta */}
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
