import React from 'react'
import { useRouter } from 'next/router'

const DeviceBlock = (props) => {
    const router = useRouter();

    //Go to device selection page
    const goToDeviceSelect = (device) => {
        router.push({
            pathname: '/Device',
            query: {
                deviceType: device.name,
                deviceImage: device.image
            }
        })
    }

    return (
        <div className='DeviceBlock rounded-md hover:border-[black]'
            onClick={() => goToDeviceSelect(props)}
        >
            <img src={`images/${props.image}`} alt={props.image} />
            <p className='text-center mt-3'>
                {props.name}
            </p>
        </div>
    )
}

export default DeviceBlock