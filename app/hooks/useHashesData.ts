import { useAccount, useNetwork } from 'wagmi';
import type { HashesData } from '../util/types';
import { useEffect, useState } from 'react';

type HashData = {
  hashes: HashesData[];
};

export default function useHashesData(): {
  hashData: HashData | undefined;
  isLoading: boolean;
  error: any;
} {
  const { chain } = useNetwork();
  const { address } = useAccount();

  const [data, setData] = useState<HashData | undefined>(undefined);
  const [error, setError] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (address && chain?.network) {
      setIsLoading(true);
      fetch(`/api/wallet/${address}?chain=${chain?.network}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }
  }, [address, chain?.network]);

  return {
    hashData: data,
    isLoading,
    error,
  };
}
