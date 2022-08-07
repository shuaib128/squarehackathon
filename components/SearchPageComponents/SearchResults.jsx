import React from 'react'
import { BsSearch } from 'react-icons/bs'
import SearchResult from './SearchResult'

const SearchResults = (props) => {
    return (
        <div>
            <p className='text-center text-[40px] font-normal pt-[20px]'>
                Search - {props.searchQuery}
            </p>

            {props.Devices !== "no data" ?
                <div className='SearchResults pb-[100px] mt-[50px] container mx-auto 
                    w-[90%] 2xl:w-[75rem] xl:w-[80%] md:w-[93%] sm:w-[93%] grid
                    grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1
                    gap-3
                '>
                    {props.Devices.map((device, index) => {
                        if (device.name.toLowerCase().includes(props.searchQuery.toLowerCase())) {
                            return (
                                <SearchResult
                                    device={device}
                                    key={index}
                                    DeviceType={props.DeviceType}
                                    searchQuery={props.searchQuery}
                                />
                            )
                        }
                    })}
                </div> :

                <div className='my-[70px] mb-[100px] flex flex-col items-center'>
                    <div className='nosearchicon p-[25px] bg-[black] rounded-md'>
                        <BsSearch />
                    </div>

                    <div className='mt-[20px]'>
                        <p className='text-[30px] font-semibold'>
                            No maching devices
                        </p>

                        <p>

                        </p>
                    </div>
                </div>
            }
        </div>
    )
}

export default SearchResults