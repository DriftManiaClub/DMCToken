const { ethers, upgrades } = require("hardhat");

async function main() {

    const [owner] = await ethers.getSigners();

    const DMCToken = await ethers.getContractFactory("DMCToken");
    const token = await upgrades.deployProxy(DMCToken, [], {
        initializer: "initialize",
        kind: "transparent",
    });

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