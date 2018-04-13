import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xB6C2F7B2ec1e8D0DaCab65858A4FE9c23a1afb4D'
);

export default instance;