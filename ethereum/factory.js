import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	"0x80980638a33517A2191939f32699d1F53997c49b"
);

export default instance;
