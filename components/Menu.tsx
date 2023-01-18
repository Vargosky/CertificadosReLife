import React from 'react'
import Link from "next/link";
const Menu = () => {
  return (
    <div className='mt-20 bg-[#009933] '>
    <nav className="flex items-center justify-between flex-wrap mt-5 pt-6">

  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-xl pt-2 lg:flex-grow">
      

      <div  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
      <Link href="/listado" passHref role="button">
          Mis Certificados
      </Link>
        
      </div>
      <div  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd574m1oPiEAKZpCA_iQylAkvsZ2MTTLECnrPxS0OAHXSM0cg/viewform?usp=sf_link" target="_blank" rel="noreferrer"> 
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSd574m1oPiEAKZpCA_iQylAkvsZ2MTTLECnrPxS0OAHXSM0cg/viewform?usp=sf_link' target="_blank" rel="noreferrer">Canjear ReLife</a> 
      </Link>
      
      </div>
      <div className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
      <Link href="/market" passHref role="button">
      Canjear Certificados
      </Link>
        
      </div>
      <div  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">

      <Link href="https://app.uniswap.org/#/swap" target="_blank" rel="noreferrer"> 
      <a href='https://app.uniswap.org/#/swap' target="_blank" rel="noreferrer">Compra/Vende ReLife</a> 
      </Link>
    
      
      </div>
    </div>

  </div>
</nav>

    </div>
  )
}

export default Menu