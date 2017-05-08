var Contribution = artifacts.require("./Contribution.sol");

// To get melonToken address
// let contribution = "..." // e.g. 0x7bc2cc74bceb99c913586fb6f8a6941572662af2
// Contribution.at(contribution).then((c) => c.melonToken()).then((a) => console.log(a))


module.exports = (deployer) => {
  const melonport = '0x32cd3282d33ff58b4ae8402a226a0b27441b7f1a';
  const signer = '0x32cd3282d33ff58b4ae8402a226a0b27441b7f1a';
  const btcs = '0x32cd3282d33ff58b4ae8402a226a0b27441b7f1b';
  const startTime = 1494154343;
  
  deployer.deploy(Contribution, melonport, btcs, signer, startTime);
};
