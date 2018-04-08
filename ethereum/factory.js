import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x6Aed056F5E2183585aFeE3205f6c7A60cb564c8C'

);

export default instance;
