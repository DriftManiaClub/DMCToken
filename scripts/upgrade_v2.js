const { ethers, upgrades } = require("hardhat");

async function main() {

    const DMCTokenV2 = await ethers.getContractFactory(
        "DMCTokenV2"
    );
    console.log("Upgrading DMCTokenV2...");

    await upgrades.upgradeProxy(
        "0xFF26c6C30fc67d45f8db06c88EE0465D9BBa6b07",
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