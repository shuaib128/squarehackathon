import React from 'react'
import Link from 'next/link'
import DeviceBlock from '../HomeComponents/DeviceBlock'

const BillBord = () => {
    return (
        <div>
            <div className='BillBord container mx-auto w-[90%] 2xl:w-[75rem] xl:w-[80%] md:w-[93%] sm:w-[93%]
                block 2xl:flex xl:flex md:flex sm:block gap-[60px] items-center justify-center
            '>
                <div className='w-[100%] 2xl:w-[50%] xl:w-[100%] md:w-[100%] sm:w-[100%]'>
                    <div className="billboeddevicesblocks mt-[62px] 2xl:grid 2xl:grid-cols-2
                        xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid grid-cols-2 sm:block justify-end gap-5
                    ">
                        <DeviceBlock
                            image="iphone.png"
                            name="Cell Phone"
                        />

                        <DeviceBlock
                            image="tablet.png"
                            name="Tablet"
                        />

                        <DeviceBlock
                            image="watch.png"
                            name="Watch"
                        />
                        <DeviceBlock
                            image="laptop.png"
                            name="Laptop"
                        />
                    </div>

                    <p className="underline decoration-solid text-center text-lg mt-5">
                        <Link href="/">Don&apos; see your device?</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BillBord