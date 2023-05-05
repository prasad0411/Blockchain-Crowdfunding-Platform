import web3 from "./web3";
import CommunityFactory from "./build/CommunityCampaign.json";


export default (address) => {
    return new web3.eth.Contract(
        CommunityFactory.abi,
        address
    );
};