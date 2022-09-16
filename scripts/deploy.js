const { ethers, upgrades } = require("hardhat");

async function main() {
    const DriftManiaClub = await ethers.getContractFactory("DriftManiaClub");
    const token = await upgrades.deployProxy(DriftManiaClub, []);
    await token.deployed();
    console.log("Token deployed to:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });