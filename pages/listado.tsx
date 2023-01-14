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
        <h1 className={styles.h1 + styles.titulo}>Mis Certificados</h1>
        <p className={styles.explain}>
          Podemos ver en este lugar los certificados canjeados.{" "}
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
                {listings?.map((listing) => (
                  <div
                    className={styles.listingShortView}
                    onClick={() => router.push(`/listing/${listing.metadata.id}`)}
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
                      <Link href={`/listing/${listing.metadata.id}`}>
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
