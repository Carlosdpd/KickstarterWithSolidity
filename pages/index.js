//Dependencias de interface, rutas y elementos útiles del contrato
import React, {Component} from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

//Componente principal que renderiza la lista de campañas
class CampaignIndex extends Component {

  //Función que obtiene los parámetros iniciales del componente
  static async getInitialProps(){

    //Llamada al contrato para obtener todas las direcciones de los contratos existentes
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    //Se rotrna la lista de contratos, equivale a: return {campaigns: campaigns};
    return { campaigns };
  }

  //Método que itera sobre la lista de campañas y las muestra en la vista
  renderCampaigns(){

    //Se realiza un map en todas las direcciones de las campañas obtenidas
    const items = this.props.campaigns.map(address  => {
      //Se  retorna una dirección y una ruta personalizada con dicha dirección
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a> Ver Campaña </a>
          </Link>
        ),
        fluid: true
      }
    });

    //Card.Group es un elemento de Semantic-UI con vista de tarjetas, recibe de parámetro el objeto 'items' que contiene todas las campañas
    return <Card.Group items={items} />;
  }

  render(){
    return (
      <Layout>
          <div>
              <h3> Campañas abiertas </h3>

              {/* Botón de crear campaña */}
              <Link route='/campaigns/new'>
                <a>
                  <Button
                      floated = "right"
                      content= "Crear campaña"
                      icon = "add circle"
                      primary = {true}
                    />
                </a>
              </Link>

              {/* Renderizado de la lista de campañas */}
              {this.renderCampaigns()}
           </div>
      </Layout>
    )
  }
}

export default CampaignIndex;
