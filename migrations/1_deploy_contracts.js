const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const DriftManiaClub = artifacts.require('DriftManiaClub');

module.exports = async function (deployer) {
  const instance = await deployProxy(DriftManiaClub, [], { deployer });
  console.log('Deployed', instance.address);
};