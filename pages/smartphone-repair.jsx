import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../utils/Header';
import { BackendLink } from '../utils/BackendLink';
import Loader from '../components/LoadingComponets/Loader'
import Phone from '../components/PhoneRepairComponents/Phone';
import Models from '../components/PhoneRepairComponents/Models';

const Phonerapair = () => {
    const [Phones, setPhones] = useState([])
    const [SelectedPhone, setSelectedPhone] = useState("")
    const [PhoneModels, setPhoneModels] = useState([])

    useEffect(() => {
        setPhones([])
        setPhoneModels([])
        try {
            axios.post(`${BackendLink}/api/devices/`, {
                device: "Cell Phone"
            })
                .then((res) => {
                    setPhones(res.data);
                })
        } catch (error) {
        }
    }, [])

    return (
        <div className='phonerapair'>
            <Head>
                <title>Other Cell Phones</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <div className='phonerapairMiddle pb-[100px] mt-[50px] container mx-auto 
                w-[90%] 2xl:w-[75rem] xl:w-[80%] md:w-[93%] sm:w-[93%]
            '>
                {PhoneModels.length === 0 ?
                    <div>
                        {Phones.length !== 0 ?
                            <div className="phonerepairphones grid
                            grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1
                            gap-6
                        ">
                                {Phones.map((phone, index) => {
                                    if (
                                        phone.name.toLowerCase() !== "iphone"
                                        && phone.name.toLowerCase() !== "samsung"
                                        && phone.name.toLowerCase() !== "google"
                                    ) {
                                        return (
                                            <Phone
                                                key={index}
                                                phone={phone}
                                                setPhoneModels={setPhoneModels}
                                                setSelectedPhone={setSelectedPhone}
                                            />
                                        )
                                    }
                                })}
                            </div> :
                            <Loader />
                        }
                    </div> :
                    <div></div>
                }

                {PhoneModels.length !== 0 ?
                    <div className='phoneRepairModels'>
                        <Models
                            PhoneModels={PhoneModels}
                            SelectedPhone={SelectedPhone}
                        />
                    </div> :
                    <div></div>
                }
            </div>
        </div>
    )
}

export default Phonerapair