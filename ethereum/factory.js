import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x85Cbb9066D9d18A48ADc93Dcc09165f75C604C02'

);

export default instance;
