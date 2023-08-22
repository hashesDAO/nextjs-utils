import { Address } from 'viem';

export type ChainNames = 'homestead' | 'mainnet' | 'goerli';

export type HashesData = {
  hash_value: Address;
  type: 'DAO' | 'Standard';
  token_id: number;
};
