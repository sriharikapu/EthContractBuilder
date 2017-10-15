window.onload = function() {
  /* contract.txt is read into contract */

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.log('No web3? You should consider trying MetaMask!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  // Read contract address from url; store in window.address
  window.address = window.location.hash;
  if (typeof address !== 'undefined') {
    window.address = window.address.substr(1); // remove leading '#'
  }
}
