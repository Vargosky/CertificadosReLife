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
      <div className={styles.container}>
        {/* Top Section */}
        <h1 className="text-5xl m-10 font-bold">Mis Certificados</h1>
        <p className="w-2/3 p-10 text-2xl">
          En este lugar puedes ver los certificados de reciclaje que tu haz comprado.
          <b>
            {" "}
            <a
              href="https://thirdweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.purple}
            >              
            </a>
          </b>{" "}
          Consigue tus certificados, cómpralos con el token Re-life
        </p>

        <hr className={styles.divider} />

        <div style={{ marginTop: 32, marginBottom: 32 }}>

        </div>

        <div className="main">
          {
            // If the listings are loading, show a loading message
            loadingListings ? (
              <div>Loading listings...</div>
            ) : (
              // Otherwise, show the listings

              <div className={styles.listingGrid}>
                {(listings?.length == 0) ? <div className="w-full justify-center items-center">Aún no tienes Certificados, consigue el tuyo <Link href={'/market'}>ACA</Link></div>: <></>}
                {listings?.map((listing) => (
                  <div
                    className={styles.listingShortView}
                    onClick={() => router.push(`/listing/${listing.metadata.id}`)}
                    key={listing.metadata.id}
                  >
                    <MediaRenderer
                      key={listing.metadata.id}
                      src={listing.metadata.image}
                      style={{
                        borderRadius: 16,
                        // Fit the image to the container
                        width: "100%",
                        height: "100%",
                      }}
                    />
                    <h2 className={styles.nameContainer}>
                      <Link href={`/listing/${listing.metadata.id}`}
                      key={listing.metadata.id} >
                        <a className={styles.name}>{listing.metadata.name}</a>
                      </Link>
                    </h2>

                  </div>
                ))}
              </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Home;
