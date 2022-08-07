import Head from 'next/head'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from '../utils/Header'
import Loader from '../components/LoadingComponets/Loader'
import { ConvertTo24 } from '../components/CalenderConponents/ConvertTo24'
import Link from 'next/link'

const Confirmation = () => {
    const router = useRouter();
    const data = router.query;
    console.log(data);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    if (data) {
        return (
            <div className='confirmation'>
                <Head>
                    <title>Appontment Booked!!</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Header />

                <div className='confirmedmain py-[150px]'>
                    <p className='text-center text-[30px] font-bold'>
                        Appointment Booked!
                    </p>

                    <div className="user_appontment_block mt-5">
                        <p className='text-center text-[18px]'>
                            {data.userName}
                        </p>
                        <p className='text-center text-[18px]'>
                            {data.userEmail}
                        </p>
                        <p className='text-center text-[18px]'>
                            {data.userNumber}
                        </p>
                    </div>

                    <div className="user_appontment_block mt-5">
                        {data.selectedDate !== undefined ?
                            <p className='text-center font-bold text-[18px]'>
                                {JSON.parse(data.selectedDate).slice(0, 10)}
                            </p> :
                            <span></span>
                        }
                    </div>

                    <p className='text-center mt-5 text-[18px]'>
                        {data.model}
                    </p>

                    <div className="user_appontment_block mt-5">
                        <p className='text-center text-[18px]'>
                            Square Unboxed Hackathon
                        </p>
                    </div>

                    <p className='gobackhomelink'>
                        <Link href='/'>Go Back To Home</Link>
                    </p>
                </div>
            </div>
        )
    } else {
        return (
            <Loader />
        )
    }
}

export default Confirmation