const DriftManiaClub = artifacts.require("DriftManiaClub");
const { deployProxy } = require('@openzeppelin/truffle-upgrades');

module.exports = async function (deployer) {
  await deployProxy(DriftManiaClub, [], { deployer, initializer: 'initialize' });
};