import useHashesData from '@/app/hooks/useHashesData';
import { mintHash } from '@/app/util/hashActions';
import { ChainNames } from '@/app/util/types';
import { useNetwork } from 'wagmi';

export default function useMintNewHash() {
  // This was originally derived from a react context in a prior project, but how you get a user's selected hash and phrase is up to you.
  const selectedHash = '0x00000';
  // Remember: the phrase will be hashed before being sent to the contract. This is also provided via the 'generateHash' util function in this repo.
  const selectedHashPhrase = '0x12333';

  const { chain } = useNetwork();
  const { hashData } = useHashesData();
  const { hashes } = hashData || {};
  const parsedHashes = hashes?.map(({ hash_value }) => hash_value);

  function handleMint() {
    if (!parsedHashes || !parsedHashes.includes(selectedHash)) {
      if (!chain?.network) {
        console.error('no chain network found');
        return;
      }
      mintHash(selectedHashPhrase, chain.network as ChainNames);
    } else {
      console.log(`hash found ${selectedHash}`);
    }
  }

  return { handleMint };
}
