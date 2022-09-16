const { ethers, upgrades } = require("hardhat");
const {expect} = require("chai");

async function main() {
    const DMCToken = await ethers.getContractFactory("DMCToken");
    const token = await upgrades.deployProxy(DMCToken, []);

    const deployedToken = await token.deployed();
    const ownerBalance = await deployedToken.balanceOf(owner.address);
    const totalSupply = await deployedToken.totalSupply();

    console.log("Token deployed to:", deployedToken.address);
    console.log("Token Owner balance:", ownerBalance);
    console.log("Token total supply:", totalSupply);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });