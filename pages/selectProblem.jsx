import Head from 'next/head';
import React from 'react'
import { useRouter } from 'next/router';
import Header from '../utils/Header';
import SelectProblems from '../components/SelectProblemComponents/SelectProblems';
import Script from "next/script"

const SelectProblem = () => {
    // Get previous page information
    const router = useRouter();
    const data = router.query;

    return (
        <div className='selectProblem'>
            <Head>
                <title>{`Problem - ${data.model}`}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <SelectProblems
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

export default SelectProblem