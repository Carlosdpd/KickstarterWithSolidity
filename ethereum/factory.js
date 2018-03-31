import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x86685e06B1A324b3Eb0424E2072fDCae4AD76418'

);

export default instance;
