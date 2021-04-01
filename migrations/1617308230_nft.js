const SqoinApp = artifacts.require("SqoinApp");
const LimitedMintableNonFungibleToken = artifacts.require("LimitedMintableNonFungibleToken");



module.exports = async function(deployer, network, accounts) {
    await deployer.deploy(LimitedMintableNonFungibleToken, 10000, 100000);
    var deployed = LimitedMintableNonFungibleToken.address;
    console.log(deployed);
    await deployer.deploy(SqoinApp, deployed, accounts[0]);

};