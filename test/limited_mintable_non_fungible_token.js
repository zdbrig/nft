const LimitedMintableNonFungibleToken = artifacts.require("LimitedMintableNonFungibleToken");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("LimitedMintableNonFungibleToken", function(accounts) {
    it("should assert true", async function() {
        var limitedMintable = await LimitedMintableNonFungibleToken.deployed();
        await limitedMintable.mint(accounts[0], 123456);
        await limitedMintable.mint(accounts[0], 123454);
        let balance = await limitedMintable.balanceOf(accounts[0]);
        console.log(" balance is " + balance);
        //return assert.isTrue(true);
    });
});