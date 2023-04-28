import Web3 from "web3";
let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: 'eth_requestAccounts' })
    .then(res => {
      // Return the address of the wallet
      console.log(res)
    });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://goerli.infura.io/v3/d881b5869ec3440f8573212195db4e55"
  );
  web3 = new Web3(provider);
}

export default web3;