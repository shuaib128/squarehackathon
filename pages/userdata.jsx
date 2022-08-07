import Head from 'next/head';
import React, { useState, useEffect } from 'react'
import Header from '../utils/Header';
import Fields from '../components/UserDataComponent/Fields';
import { useRouter } from 'next/router'
import { BackendLink } from '../utils/BackendLink'
import axios from 'axios';
import Loader from '../components/LoadingComponets/Loader';
import Script from "next/script"

const Userdata = () => {
    const [Loading, setLoading] = useState(false)
    //All user data
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [Adress, setAdress] = useState("")

    //Services data
    const [Services, setServices] = useState()

    const router = useRouter();
    const data = router.query;
    const serviceToQuery = `${data.model}-${data.problem}`.toLowerCase()

    //Get all services
    useEffect(() => {
        try {
            axios.post(`${BackendLink}/api/booking/`, {
                serviceToQuery: serviceToQuery
            })
                .then((res) => {
                    setServices(res.data.catalog);
                })
        } catch (error) {
        }
    }, [data])

    return (
        <div className='userdata'>
            <Head>
                <title>How can we reach you?</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            {!Loading && Services ?
                <Fields
                    Name={Name}
                    setName={setName}
                    Email={Email}
                    setEmail={setEmail}
                    PhoneNumber={PhoneNumber}
                    setPhoneNumber={setPhoneNumber}
                    Adress={Adress}
                    setAdress={setAdress}
                    Services={Services}
                    setLoading={setLoading}
                /> :
                <Loader />
            }

            <Script
                id="mapscript"
                src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&libraries=places`}
                strategy="beforeInteractive"
            >
            </Script>
        </div>
    )
}

export default Userdata