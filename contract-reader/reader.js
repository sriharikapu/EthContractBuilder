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
  address = window.location.hash;
  if (typeof address !== 'undefined') {
    address = address.substr(1); // remove leading '#'
  }

  // Read contract details
  readContract(address);
}

// Main program entry point
function readContract(address) {
  var contract = web3.eth.contract(address, abi);
  console.log(contract);
}