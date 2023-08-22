# HashesDAO Utilities
This repo contains several utilities for using HashesDAO data in your own project, allowing the following for a connected wallet:
- get a wallet's existing hashes
- mint a standard hash
- submit a phrase to generate a mintable hash

## Get started
1. Ensure that you're on latest stable version of Node.js (`18.16.1`)
1. Install dependencies: `npm i` 
1. Run development server: `npm run dev`
1. Open [http://localhost:3000/](http://localhost:3000/)

## Tools used
- [NextJS](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Wagmi](https://wagmi.sh/)
- [Viem](https://viem.sh/)

## TL;DR - How you can use this right now 🚀
This repo is based from [prior hashesDAO work](https://github.com/hashesDAO/editor), utilizing the tools above. Likewise, it's lightly opinionated in terms of tech stack but is easily modifiable based on your needs. Here's the core functionality:

1. [useHashesData](https://github.com/hashesDAO/nextjs-utils/blob/main/app/hooks/useHashesData.ts) - Given a connected wallet, this custom hook calls a Next.js api endpoint within this repo and provides the hashes NFT data associated with the connected wallet on the given network. Additionally, `loading` and `error` states are also provided. [Example](https://github.com/hashesDAO/editor/blob/main/app/components/Dashboard/HashSelect/HashSelectSection.tsx#L49)
2. [useMintNewHash](https://github.com/hashesDAO/nextjs-utils/blob/main/app/hooks/useMintNewHash.ts) - Given a connected wallet, this custom hook provides a function to allow a user to mint a standard hash. [Example](https://github.com/hashesDAO/editor/blob/main/app/components/Dashboard/buttons/Mint.tsx#L9)
3. [generateHash](https://github.com/hashesDAO/nextjs-utils/blob/main/app/util/hashActions.ts#L5) - this function allows a user to generate a hash on the fly, provided a phrase, wallet address, and network. [Example](https://github.com/hashesDAO/editor/blob/main/app/components/Dashboard/HashSelect/GenerateHashForm.tsx#L33)
4. [mintHash](https://github.com/hashesDAO/nextjs-utils/blob/main/app/util/hashActions.ts#L14) - this function allows a user to mint a standard hash directly (without the checks provided in `useMintHash`). [Example](https://github.com/hashesDAO/editor/blob/main/app/hooks/useMintNewHash.ts#L22)
5. [callReadOnlyFnFromHashesContract](https://github.com/hashesDAO/nextjs-utils/blob/main/app/util/index.ts#L30) - Read from the existing mainnet or goerli hashes contract.
6. [callWriteFnFromHashesContract](https://github.com/hashesDAO/nextjs-utils/blob/main/app/util/index.ts#L50) - Write from the existing mainnet or goerli hashes contract.
