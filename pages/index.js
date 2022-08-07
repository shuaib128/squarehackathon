import Head from 'next/head'

// Import Utils
import Header from "../utils/Header"
import Script from "next/script"

//Import Comonents
import BillBord from '../components/HomeComponents/BillBord'

export default function Home() {
  return (
    <div className="Home">
      <Head>
        <title>Welcome to Square Unboxed Hackathon</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />

      <div>
        <BillBord />
      </div>

      <Script
        id="mapscript"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&libraries=places`}
        strategy="beforeInteractive"
      >
      </Script>
    </div>
  )
}
