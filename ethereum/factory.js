import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xE90add8Be6150cfe8782772A2B179fE902E56212'

);

export default instance;
