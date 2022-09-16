async function main () {
  // We get the contract to deploy
  const DriftManiaClub = await ethers.getContractFactory('DriftManiaClub');
  console.log('Deploying DriftManiaClub...');
  const dmcDeploy = await DriftManiaClub.deploy();
  await dmcDeploy.deployed();
  console.log('DriftManiaClub deployed to:', dmcDeploy.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });