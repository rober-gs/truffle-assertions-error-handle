// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract ErrorHandling {

    event Log(address account);
    function testRequire(uint _i) external pure {
        // Require should be used to validate conditions such as:
        // - inputs
        // - conditions before execution
        // - return values from calls to other functions
        require(_i <= 10, "testRequire i > 10");
    }

    function testRevert(uint _i) external pure {
        // Revert is useful when the condition to check is complex.
        // This code does the exact same thing as the example above
        if (_i > 10) {
            revert("testRevert i > 10");
        }
    }
    
    function testEvent() external {
        emit Log(msg.sender);
    }
}
