const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    let addy = await greeter.addyCheck();
    console.log(addy);
    let biit = await greeter.byiit();
    console.log(biit);
    let byiit12 = await greeter.byiit12();
    console.log(byiit12);
    let encoding2 = await greeter.encoding2();
    console.log(encoding2);
    let encoding6 = await greeter.encoding6();
    console.log(encoding6);
    let max8 = await greeter.max8();
    console.log(max8);
    let encoding = await greeter.encoding(255);
    console.log(encoding);
    let senderIs = await greeter.senderIs();
    console.log(senderIs);
    let deconstruct = await greeter.deconstruct("0xff0000000000fff39fd6e51aad88f6f4ce6ab8827279cfffb92266");
    console.log(deconstruct);

    // 0x0000000000000000000000000000000000000000
    // 0x0000000000000000000000000000000000000000 000000000000000000000000
    // 0x000000000000000000000000       
    // 79 228 162 514 264 337 593 543 950 335  
    //                          7 900 000 000  
    // 0x               0000 000 000 000 000  
    // //    0x                  1D6 E06 F00
    //                  (1)  (      2      )   
    // 0xff 00 00 00 00 00 ff f39fd6e51aad88f6f4ce6ab8827279cfffb92266 00 00 00 00 00
    //                        f39Fd6e51aad88F6F4ce6aB8827279cffFb92266

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
