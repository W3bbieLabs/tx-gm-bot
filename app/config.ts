import { base } from 'viem/chains';
import {
    Hex,
} from 'viem';

// use NODE_ENV to not have to change config based on where it's deployed https://zizzamia.xyz
export const NEXT_PUBLIC_URL = process.env.NODE_ENV == "development" ? 'https://8645-2600-1700-9cc0-3ab0-a822-eb68-5c2c-df4b.ngrok-free.app' : 'https://tx-gmbot.netlify.app';
export const API_URL = process.env.NODE_ENV == "development" ? 'https://8645-2600-1700-9cc0-3ab0-a822-eb68-5c2c-df4b.ngrok-free.app' : 'https://tx-gmbot.netlify.app';

export const CHAIN = base;
export const CONTRACT_ADDRESS = '0x34572eb8bc116582170629c9a309f8ed75ac6984';
export const TOKEN_ID = 1n; // First collection is 1
export const test_address = "0x3592D1C427190ac1BBd0344C77681Fa5A2E36EB6"
export const MINTER_PRIVATE_KEY = `0x${process.env.MINTER_PRIVATE_KEY}` as Hex | undefined;
export const RPC_URL = "https://base-rpc.publicnode.com"
export const GM_CONTRACT = "0x34572eb8bC116582170629c9a309F8eD75Ac6984"
export const Referral = "0xC92a84aCE1fF2D51dE471D1310561275b9EbD781" as Hex
export const MINTER = '0x04E2516A2c207E84a1839755675dfd8eF6302F0a' as Hex

export enum ResponseType {
    SUCCESS,
    RECAST,
    NO_ADDRESS,
    OUT_OF_GAS,
    ERROR,
}


export enum ContractResponse {
    NO_PRIVATE_KEY,
    NO_TO_ADDRESS,
    CONTRACT_WRITE_ERROR,
    CONTRACT_SIMULATE_ERROR,
    SUCCESS
}
