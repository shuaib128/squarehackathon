import React from 'react'
import { useRouter } from 'next/router'
import { CamelCased } from '../../utils/camelcase'

const SearchResult = ({ device, searchQuery, DeviceType }) => {
    const router = useRouter();

    const selectProblem = () => {
        router.push({
            pathname: '/selectProblem',
            query: {
                deviceType: DeviceType,
                deviceImage: device.image,
                device: CamelCased(searchQuery),
                model: device.name,
            }
        })
    }

    return (
        <div className='SearchResult' onClick={selectProblem}>
            <p className='text-center text-[17px]'>{device.name}</p>
        </div>
    )
}

export default SearchResult