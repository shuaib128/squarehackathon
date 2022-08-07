import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Header from '../utils/Header';
import { useRouter } from 'next/router'
import axios from 'axios';
import { BackendLink } from '../utils/BackendLink';
import Loader from '../components/LoadingComponets/Loader';
import CalenderComponent from '../components/CalenderConponents/CalenderComponent';

const Calender = () => {
    const [Loading, setLoading] = useState(true)
    const [ServiceDuration, setServiceDuration] = useState()
    const [AppointmentList, setAppointmentList] = useState([])

    // Get previous page information
    const router = useRouter();
    const data = router.query;


    // Get all the services
    useEffect(() => {
        try {
            const serviceToQuery = `${JSON.parse(data.service).model}-${JSON.parse(data.service).problem}`
            axios.post(`${BackendLink}/api/booking/services`, {
                serviceToQuery: serviceToQuery
            })
                .then((res) => {
                    setServiceDuration(
                        res.data.catalog["item_data"]["variations"][0]["item_variation_data"]["service_duration"]
                    )
                })
        } catch (error) {
        }
    }, [data.service])


    //ListAllAppointments
    useEffect(() => {
        try {
            axios.post(`${BackendLink}/api/booking/list/appointment`, {
                serviceToQuery: "serviceToQuery"
            })
                .then((res) => {
                    setAppointmentList(res.data);
                })
        } catch (error) {
        }
    }, [])


    return (
        <div className='calender'>
            <Head>
                <title>Pick a Date</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {typeof data.service !== 'undefined' ?
                <>
                    <Header />
                    {Loading ?
                        <CalenderComponent
                            data={JSON.parse(data.service)}
                            setLoading={setLoading}
                            ServiceDuration={ServiceDuration}
                            AppointmentList={AppointmentList}
                        /> :
                        <Loader />
                    }
                </> :
                <div></div>
            }
        </div>
    )
}

export default Calender