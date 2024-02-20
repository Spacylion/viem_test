import { createPublicClient } from "viem/_types/clients/createPublicClient";
import { createWalletClient } from "viem/_types/clients/createWalletClient";


function greet(name: string): string {
    console.log( createPublicClient);
    console.log(  createWalletClient);
    
    return `Hello, ${name}!`;
    
}

const personName: string = "John";
console.log(greet(personName));
