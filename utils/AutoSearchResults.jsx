import React, { useState } from 'react'
import SpinningLoader from '../components/LoadingComponets/SpinningLoader'
import { useRouter } from 'next/router'
import { CamelCased } from './camelcase'

const AutoSearchResults = (props) => {
    const router = useRouter();
    const searchQuery = props.SearchQuery.toLowerCase().replace(/\s/g, '')

    const [DeviceCategory, setDeviceCategory] = useState()

    const selectProblem = (data) => {
        props.AutoSearchDevices.map((device) => {
            device.models.map((model) => {
                if (model.name === data.name) {
                    setDeviceCategory(device.category.name);
                }
            })
        })

        router.push({
            pathname: '/selectProblem',
            query: {
                deviceType: DeviceCategory,
                deviceImage: data.image,
                device: CamelCased(props.SearchQuery),
                model: data.name,
            }
        })
    }

    return (
        <div className='AutoSearchResults mx-auto w-[90%] 2xl:w-[80rem] xl:w-[80%] md:w-[93%] sm:w-[93%] pb-5'>
            {props.AutoSearch !== "no data" ?
                <>
                    {props.AutoSearch.length !== 0 ?
                        <ul>
                            {props.AutoSearch.map((device, index) => {
                                if (device.name.toLowerCase().replace(/\s/g, '').includes(searchQuery)) {
                                    return (
                                        <li key={index} onClick={() => selectProblem(device)}>
                                            {device.name}
                                        </li>
                                    )
                                }
                            })}
                        </ul> :
                        <SpinningLoader />
                    }
                </> :
                <>
                    <ul>
                        <li>No Device Found</li>
                    </ul>
                </>
            }
        </div>
    )
}

export default AutoSearchResults