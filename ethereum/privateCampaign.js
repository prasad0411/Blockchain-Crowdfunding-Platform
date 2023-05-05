import web3 from "./web3";
import PrivateFactory from "./build/PrivateCampaign.json";


export default (address) => {
    return new web3.eth.Contract(
        PrivateFactory.abi,
        address
    );

};