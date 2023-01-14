import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

import Link from "next/link";
import {
  MediaRenderer,
  useActiveListings,
  useContract,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { marketplaceContractAddress, collectionContractAddress } from "../addresses";

import  {useOwnedNFTs, useAddress} from "@thirdweb-dev/react";

const Home: NextPage = () => {
  const address = useAddress();
  const router = useRouter();
  const { contract } = useContract(collectionContractAddress);
  const { data: listings, isLoading: loadingListings } = useOwnedNFTs(contract, address);

  console.log(listings);

  return (
    <>
      {/* Content */}
        
    </>
  );
};

export default Home;
