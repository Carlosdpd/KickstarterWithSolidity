//Dependencias de interface, rutas y elementos útiles del contrato
import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Link } from '../../../routes';
import { Button, Table } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';
import web3 from '../../../ethereum/web3';

//Componente principal que renderiza la tabla que contiene la lista de solicitudes
class RequestIndex extends Component {

  //Función que obtiene los parámetros iniciales del componente
  static async getInitialProps(props){

    //Se obtiene la dirección de la campaña actual
    const { address } = props.query;

    //Se obtiene la instancia de la campaña, dada su dirección
    const campaign = Campaign(address);

    //Se obtienen la lista de cuentas de Metamask
    const accounts = await web3.eth.getAccounts();

    //Cuenta actual utilizada
    const currentAccount = accounts[0];

    //Lista de atributos que se obtienen de la campaña
    const campaignManager = await campaign.methods.manager().call();
    const requestCount = await campaign.methods.getRequestCount().call();
    const approversCount = await campaign.methods.approversCount().call();
    const approvalRate = await campaign.methods.approvalRate().call();
    const rejectedRate = await campaign.methods.rejectedRate().call();

    //Balance actual del contrato
    const currentBalance = await web3.eth.getBalance(address);

    //Conversión a ether del balance del contrato
    const balanceToEther = await web3.utils.fromWei(currentBalance, 'ether');

    //Se obtiene la lista de solicitudes del contrato
    const requests = await Promise.all(
      Array(parseInt(requestCount)).fill().map((element, index) => {
        return campaign.methods.requests(index).call();
      })
    );

    //Se retorta el objeto con todas las variables necesarias para renderizar
    return { address, requests,requestCount, approversCount, campaignManager, currentAccount, approvalRate, rejectedRate, balanceToEther  };
  }

  //Función encargada de renderizar una fila de la tabla en un componente separado, junto a la lista de atributos necesarios por fila
  renderRows() {
    return this.props.requests.map((request, index) => {
      return <RequestRow
        key={index}
        id={index}
        request={request}
        address={this.props.address}
        approversCount={this.props.approversCount}
        approvalRate={this.props.approvalRate}
        rejectedRate={this.props.rejectedRate}
      />
    });
  }

  render(){

    //Se obtienen los atributos necesarios del elemento 'Table' (Provisto por Semantic-UI)
    const { Header, Row, HeaderCell, Body } = Table;

    return(
      <Layout>
          <h3> Solicitudes </h3>

          {/* Balance de la campaña actual */}
          <h3> Balance de la campaña: {this.props.balanceToEther} Ether </h3>

          {/* Botón para crear una solicitud */}
          <Link route={`/campaigns/${this.props.address}/requests/new`}>
            <a>
              {/* Este botón se inhabilita si la persona que ve la página no es el gerente, de esta forma, quien no sea el gerente no puede hacer click en este botón */}
              <Button primary floated='right' style={{ marginBottom:10 }} disabled={this.props.campaignManager != this.props.currentAccount}>
                Crear solicitud
              </Button>
            </a>
          </Link>

          <Table>
            <Header>
              <Row>

                {/* Cabeceras de la tabla */}
                <HeaderCell> ID </HeaderCell>
                <HeaderCell> Fecha creación </HeaderCell>
                <HeaderCell> Expiración </HeaderCell>
                <HeaderCell> Descripción </HeaderCell>
                <HeaderCell> Monto (ether) </HeaderCell>
                <HeaderCell> Destino </HeaderCell>
                <HeaderCell> Cuenta de aprobados </HeaderCell>
                <HeaderCell> Cuenta de rechazados </HeaderCell>
                <HeaderCell> Rechazar </HeaderCell>
                <HeaderCell> Aprobar </HeaderCell>
                <HeaderCell> Finalizar </HeaderCell>

              </Row>
            </Header>
            <Body>
              {/* Llamado al componente que rellenará las filas de la tabla */}
              {this.renderRows()}
            </Body>
          </Table>

          {/* Número de solicitudes encontradas */}
          <div> Encontradas {this.props.requestCount} solicitudes. </div>

      </Layout>
    );
  }
}

export default RequestIndex;
