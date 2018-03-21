import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xF7B0d01603F128B827034BA937C79565B86bB1A3'

);

export default instance;
