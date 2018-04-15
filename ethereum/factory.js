import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	"0x0BaAA31bd49f2e0c0F64Eb4AF8E8ac0663F54571"
);

export default instance;
