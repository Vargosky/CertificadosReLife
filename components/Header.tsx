import { useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Header() {
  // Helpful thirdweb hooks to connect and manage the wallet from metamask.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.right}>
          <Link href="/" passHref role="button">
            <img
              className="homeBtn"
              src={`/logo.png`}
              alt="Thirdweb Logo"
              width={135}
              style={{ cursor: "pointer" }}
            />
          </Link>
          
          <Link href="/listado" passHref role="link">
            <img
              src={`/misCert.png`}
              alt="Thirdweb Logo"
              width={135}
              style={{ cursor: "pointer" }}
              
            />
          </Link>

          <Link href="https://docs.google.com/forms/d/19uZ1oxSGO1yD-opYiZuYQcBDiT3nDQAIDaIKK9EGmSg/edit" passHref role="link" target="_blank">
            <img
              src={`/canjear.png`}
              alt="Thirdweb Logo"
              width={135}
              style={{ cursor: "pointer" }}
            />
          </Link>

          <Link href="/" passHref role="link" target="_blank">
            <img
              src={`/canjeaCertificados.png`}
              alt="Thirdweb Logo"
              width={135}
              style={{ cursor: "pointer" }}
            />
          </Link>
          <Link href="https://app.uniswap.org/#/swap" passHref role="link" target="_blank">
            <img
              src={`/intercambia.png`}
              alt="Thirdweb Logo"
              width={135}
              style={{ cursor: "pointer" }}
            />
          </Link>


        </div>

      </div>
      <div className={styles.right}>
        {address ? (
          <>
            <a
              className={styles.secondaryButton}
              onClick={() => disconnectWallet()}
            >
              Disconnect Wallet
            </a>
            <p style={{ marginLeft: 8, marginRight: 8, color: "grey" }}>|</p>
            <p>{address.slice(0, 6).concat("...").concat(address.slice(-4))}</p>
          </>
        ) : (
          <a
            className={styles.mainButton}
            onClick={() => connectWithMetamask()}
          >
            Connect Wallet
          </a>
        )}
      </div>
    </div>
  );
}
