
const ErrorHandling = artifacts.require("ErrorHandling");
const Returns = artifacts.require("ReturnsValues");
const {
    // BN,           // Big Number support
    // constants,    // Common constants, like the zero address and largest integers
    expectEvent,  // Assertions for emitted events
    expectRevert, // Assertions for transactions that should fail
} = require('@openzeppelin/test-helpers');

const { web3 } = require('@openzeppelin/test-helpers/src/setup');
const BN = web3.utils.BN;

contract("ErrorHandling", accounts => {
    

    const [ owner ] = accounts;

    beforeEach(async () => {
        instance = await ErrorHandling.new({
            from: owner
        });
    });

    describe("Handling Errors ", () => {

        it("Test Require",  async() => {

            await expectRevert(
                instance.testRequire(20),
                'testRequire i > 10',
            );
        });
        it("Test Revert",  async() => {

            await expectRevert(
                instance.testRevert(20),
                'testRevert i > 10',
            );
        });
    });
    // describe("Handling Events ", () => {

    //     it("Test Emit Event", async() => {
    //         await expectEvent(
    //             instance.testEvent(), 
    //             "Log"
    //         )
    //     });

    // });

});

contract("ReturnsValues", accounts => {
    
    const [ owner ] = accounts;

    beforeEach(async () => {
        instance = await Returns.new({
            from: owner
        });
    });

    describe("Returns Handling", () => {

        it("Single ", async() => {
            
            const result = await instance.returnValueTx.call(99);                                      
                           await instance.returnValueTx(99);
            
            console.log("console.log | result:",BN(result).toString() );
            
            assert.equal(
                BN(result).toString(),  
                BN(await instance.thisIsInt()).toString(),
                "Ora que mi niño"
            );            
        });     
        it("Multiple ", async() => {
            
            const results = await instance.returnsValuesTx.call(13, true);                                      
                            await instance.returnsValuesTx(13, true);
            
            console.log("console.log | results:",results);
            
            // assert.equal(
            //     BN(result).toString(),  
            //     BN(await instance.thisIsInt()).toString(),
            //     "Ora que mi niño"
            // );            
        });    
    });
   

});
