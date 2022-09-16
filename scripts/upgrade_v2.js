const { ethers, upgrades } = require("hardhat");

async function main() {

    const DMCTokenV2 = await ethers.getContractFactory(
        "DMCTokenV2"
    );
    console.log("Upgrading DMCTokenV2...");

    await upgrades.upgradeProxy(
        "0xC81017e4AbA0C6633EE7302E738878dd509a2bB3",
        DMCTokenV2
    );
    console.log("Upgraded Successfully");
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });