import React from 'react'
import { useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const MainButton = () => {

    const address = useAddress();
    const connectWithMetamask = useMetamask();
    const disconnectWallet = useDisconnect();
  return (
    <>
            {address ? (
          <>
            <a className='text-white font-bold'
              onClick={() => disconnectWallet()}
            >
              Disconnect Wallet
            </a>
            
            <p className=''>{address.slice(0, 6).concat("...").concat(address.slice(-4))}</p>
          </>
        ) : (
          <a
            
            onClick={() => connectWithMetamask()}
          >
            Conecte Billetera
          </a>
        )}
    
    
    
    </>



  )
}

export default MainButton