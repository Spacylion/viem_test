# Reproducing TypeScript Compilation Error with viem

This guide will walk you through the steps to reproduce the TypeScript compilation error when using the viem library.

## Prerequisites

Before starting, ensure that you have Node.js and npm installed on your system.

## Steps

1. Create a new directory and navigate into it:

    ```bash
    mkdir VIEM_TEST
    cd VIEM_TEST
    ```

2. Initialize a new npm project:

    ```bash
    npm init -y
    ```

3. Install the viem library:

    ```bash
    npm install viem@2.7.11
    ```

4. Create a TypeScript file named `index.ts` with the following content:

    ```typescript
    // index.ts
    import { createPublicClient } from "viem/_types/clients/createPublicClient";
    import { createWalletClient } from "viem/_types/clients/createWalletClient";


    function greet(name: string): string {
        console.log( createPublicClient);
        console.log(  createWalletClient);
        
        return `Hello, ${name}!`;
        
    }

    const personName: string = "John";
    console.log(greet(personName));

    ```

5. Create a `tsconfig.json` file with the following configuration:

    ```json
    {
        "compilerOptions": {
            "forceConsistentCasingInFileNames": true,
            "newLine": "lf",
            "noFallthroughCasesInSwitch": true,
            "noImplicitReturns": true,
            "noUncheckedIndexedAccess": true,
            "noUnusedParameters": true,
            "strict": true,
            "target": "ES2019",
            "moduleResolution": "node",
            "esModuleInterop": true
        },
        "include": [
            "src/**/*.ts"
        ]
    }

    ```

6. Run the TypeScript compiler:

    ```bash
    tsc --build
    ```

You should see the following error:
> errors.txt