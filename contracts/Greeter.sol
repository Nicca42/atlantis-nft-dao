//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    string private greeting;

    function addyCheck() public pure returns(address) {
        return address(0);
    }

    function byiit() public pure returns(bytes32) {
        return bytes32(0);
    }

    function byiit12() public pure returns(bytes8) {
        return bytes8(0);
    }

    function encoding2() public pure returns(bytes2) {
        return bytes2(abi.encodePacked(
            bytes2(0xffff)
        ));
    }

    function encoding6() public pure returns(bytes6) {
        return bytes6(abi.encodePacked(
            bytes2(0xffff)
        ));
    }

    function max8() public pure returns(uint8) {
        return type(uint8).max;
    }
    function encoding(uint8 _type) public view returns(bytes27) {
        // bytes2 tokenType = 
        return bytes27(abi.encodePacked(
            _type,
            bytes6(uint48(type(uint8).max)),
            msg.sender
        ));
    }

    function deconstruct(bytes calldata _owner) public pure returns(
        uint8 tokenType, 
        uint48 tokenID,
        address owner
    ) {
        (
            tokenType, 
            tokenID, 
            owner
        ) = abi.decode(_owner, (uint8, uint48, address));
    }

    function senderIs() public view returns(address) {
        return msg.sender;
    }

    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
