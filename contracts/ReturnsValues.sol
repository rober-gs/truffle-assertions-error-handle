// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract ReturnsValues {
    
    uint public thisIsInt;
    bool public thisIsBoolean;

    function returnValueTx(uint _int) 
        external 
        returns( uint )
    {   
        thisIsInt = _int;
        return thisIsInt;

    }
    function returnsValuesTx(uint _int, bool _bool ) 
        external 
        returns( uint, uint, bool, address)
    {

        thisIsInt = _int;
        thisIsBoolean = _bool;
        return (thisIsInt, thisIsInt + 1, thisIsBoolean, msg.sender) ;
    }
}
