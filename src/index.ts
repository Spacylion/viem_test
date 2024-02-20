import {  createPublicClient, createWalletClient } from "viem";


function greet(name: string): string {
    console.log( createPublicClient);
    console.log(  createWalletClient);
    
    return `Hello, ${name}!`;
    
}

const personName: string = "John";
console.log(greet(personName));
