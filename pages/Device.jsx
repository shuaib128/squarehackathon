import Head from 'next/head';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { BackendLink } from '../utils/BackendLink'
import { useRouter } from 'next/router'
import DeviceFields from '../components/DeviceModelComponents/DeviceFields';
import Header from '../utils/Header'
import Loader from '../components/LoadingComponets/Loader';

const Device = () => {
    // Get previous page information
    const router = useRouter();
    const data = router.query;

    //States
    const [Devices, setDevices] = useState()
    const [Models, setModels] = useState([])
    const [SelectedDevice, setSelectedDevice] = useState()
    const [SelectedModel, setSelectedModel] = useState()

    useEffect(() => {
        try {
            axios.post(`${BackendLink}/api/devices/`, {
                device: data.deviceType
            })
                .then((res) => {
                    setDevices(res.data);
                })
        } catch (error) {
        }
    }, [data.deviceType])

    return (
        <div className='DeviceModel'>
            <Head>
                <title>Pick a Device</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />

            {Devices ?
                <DeviceFields
                    data={data}
                    Devices={Devices}
                    setDevices={setDevices}
                    SelectedDevice={SelectedDevice}
                    setSelectedDevice={setSelectedDevice}
                    Models={Models}
                    setModels={setModels}
                    SelectedModel={SelectedModel}
                    setSelectedModel={setSelectedModel}
                /> :
                <Loader />
            }
        </div>
    )
}

export default Device