import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

import Link from "next/link";

import { useRouter } from "next/router";


const Home: NextPage = () => {
  const router = useRouter();


  

  return (
    <>
      {/* Content */}
      <div className={styles.container}>
        {/* Top Section */}
        
        <h1 className=" w-2/3  pt-20 items-center text-8xl"> Atrévete a cambiar tu mundo</h1>
        <p className="justify-center items-center text-3xl w-2/3 pt-10">
          Consigue monedas reciclando, canjea tus certificados de reducción de CO2 equivalente, hazte cargo de tu propia contaminación. Puedes ser Carbono Neutral. 
        </p>

        <hr className={styles.divider} />

        <div style={{ marginTop: 32, marginBottom: 32 }}>

        </div>

        <div className="main">
              <h1 className="text-4xl font-bold mb-10">¿Que necesitas?</h1>
        </div>
        <div className="text-xl">1. Lo primero que necesitas es una billetera inteligente, como Metamask</div>

        

      </div>
    </>
  );
};

export default Home;
