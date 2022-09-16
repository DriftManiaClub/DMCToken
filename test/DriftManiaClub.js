const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("DriftManiaClub contract", function () {
    it("Deployment should assign the total supply of tokens to the owner", async function () {

        const [owner] = await ethers.getSigners();

        const DriftManiaClub = await ethers.getContractFactory("DriftManiaClub");
        const token = await upgrades.deployProxy(DriftManiaClub, []);
        const hardhatToken =await token.deployed();

        const ownerBalance = await hardhatToken.balanceOf(owner.address);

        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);

    });
});