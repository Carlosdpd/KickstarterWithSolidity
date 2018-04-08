import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x938F8FdA6a982f3a02B3E3dFBbc5cECdb04A9026'

);

export default instance;
