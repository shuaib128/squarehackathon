import Head from 'next/head';
import React from 'react'
import Header from '../utils/Header';
import SelectDelOption from '../components/DelevaryOpioncomponents/SelectDelOption';
import { useRouter } from 'next/router'
import Script from "next/script"

const DelevaryOption = () => {
    // Get previous page information
    const router = useRouter();
    const data = router.query;

    return (
        <div className='delevaryoption'>
            <Head>
                <title>How you want to get delivered</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <SelectDelOption
                data={data}
            />

            <Script
                id="mapscript"
                src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&libraries=places`}
                strategy="beforeInteractive"
            >
            </Script>
        </div>
    )
}

export default DelevaryOption