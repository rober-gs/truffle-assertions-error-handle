
const ErrorHandling = artifacts.require("ErrorHandling");
const {
    // BN,           // Big Number support
    // constants,    // Common constants, like the zero address and largest integers
    expectEvent,  // Assertions for emitted events
    expectRevert, // Assertions for transactions that should fail
} = require('@openzeppelin/test-helpers');

contract("ErrorHandling", accounts => {
    

    const [ owner, alice ] = accounts;

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
    describe("Handling Events ", () => {

        it("Test Emit Event", async() => {
            await expectEvent(
                instance.testEvent(), 
                "Log"
            )
        });

    });

})
