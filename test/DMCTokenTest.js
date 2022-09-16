const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("DMCToken contract", function () {
    it("Deployment should assign the total supply of tokens to the owner", async function () {

        const [owner] = await ethers.getSigners();

        const DriftManiaClub = await ethers.getContractFactory("DMCToken");
        const token = await upgrades.deployProxy(DriftManiaClub, []);
        const deployedToken =await token.deployed();

        const ownerBalance = await deployedToken.balanceOf(owner.address);

        expect(await deployedToken.totalSupply()).to.equal(ownerBalance);

    });
});