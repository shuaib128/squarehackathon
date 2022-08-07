import Head from 'next/head';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BackendLink } from '../utils/BackendLink'
import Header from '../utils/Header'
import { useRouter } from 'next/router'
import Loader from '../components/LoadingComponets/Loader'
import SearchResults from '../components/SearchPageComponents/SearchResults'

const Search = () => {
    const router = useRouter()
    const data = router.query.keyword
    const [Devices, setDevices] = useState()
    const [DeviceType, setDeviceType] = useState()

    //Send search query
    useEffect(() => {
        setDevices()
        setDeviceType()
        
        //Get data back and set all devices
        try {
            axios.post(`${BackendLink}/api/devices/search`, {
                query: data
            })
                .then((res) => {
                    if (res.data !== "No Device") {
                        res.data.map((device, index) => {
                            setDeviceType(device.category.name);
                            setDevices(device.models);
                        })
                    }
                    else {
                        setDevices("no data");
                    }
                })
        } catch (error) {
        }
    }, [data])

    return (
        <div className='search'>
            <Head>
                <title>{`Search - ${data}`}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            {Devices  ?
                <SearchResults
                    Devices={Devices}
                    searchQuery={data}
                    DeviceType={DeviceType}
                /> :
                <Loader />
            }
        </div>
    )
}

export default Search