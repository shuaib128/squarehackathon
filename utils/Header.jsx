import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Router from 'next/router'
import AutoSearchResults from './AutoSearchResults'
import axios from 'axios'
import { BackendLink } from './BackendLink'
import Link from 'next/link'

const Header = () => {
    const [SearchQuery, setSearchQuery] = useState("")
    const [AutoSearch, setAutoSearch] = useState([])
    const [AutoSearchDevices, setAutoSearchDevices] = useState()

    //Search value handler
    function searchValueHandler(query) {
        setSearchQuery(query)
    }

    //Search Query
    const searchQuery = () => {
        if (SearchQuery) {
            Router.push({
                pathname: '/search',
                query: { keyword: SearchQuery },
            })
        }
    }

    //Get devices for autosearch
    function getDeviceForAutoDisplay() {
        setAutoSearch([])
        try {
            axios.post(`${BackendLink}/api/devices/search`, {
                query: SearchQuery
            })
                .then((res) => {
                    if (res.data !== "No Device") {
                        setAutoSearchDevices(res.data)
                        res.data.map((device, index) => {
                            setAutoSearch(device.models);
                        })
                    }
                    else {
                        setAutoSearch("no data");
                    }
                })
        } catch (error) {
        }
    }


    return (
        <div>
            <div className='bg-[#f4f4f4]'>
                <div className="searchbar flex items-center justify-between py-[20px] 
                    mx-auto w-[90%] 2xl:w-[80rem] xl:w-[80%] md:w-[93%] sm:w-[93%]
                ">
                    <div className="outsearchbox" onClick={searchQuery}>
                        <AiOutlineSearch color='white' size={25} className='searchicon z-10' />
                    </div>
                    <input
                        placeholder='Search your device'
                        type="text"
                        className='searchinput'
                        onChange={e => {
                            searchValueHandler(e.target.value)

                            //get devices and then display on the auto reply
                            getDeviceForAutoDisplay()
                        }}
                        onKeyDown={event => {
                            if (event.key === "Enter") {
                                searchQuery()
                            }
                        }}
                    />
                </div>
                {SearchQuery.length !== 0 ?
                    <AutoSearchResults
                        AutoSearchDevices={AutoSearchDevices}
                        AutoSearch={AutoSearch}
                        SearchQuery={SearchQuery}
                        setAutoSearch={setAutoSearch}
                    /> :
                    <div></div>
                }
            </div>
        </div>
    )
}

export default Header