import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BackendLink } from '../../utils/BackendLink'
import Problem from './Problem'
import Loader from '../../components/LoadingComponets/Loader'

const SelectProblems = (props) => {
    const [Problems, setProblems] = useState()
    const serviceToQuery = `${props.data.model}-`.toLowerCase()

    // Get all the problems
    useEffect(() => {
        try {
            axios.post(`${BackendLink}/api/booking/all`, {
                serviceToQuery: serviceToQuery
            })
                .then((res) => {
                    setProblems(res.data.catalog)
                })
        } catch (error) {
        }
    }, [props.data])


    return (
        <>
            {Problems ?
                <div className='SelectProblems pb-[80px] 
                    container block mx-auto w-[90%] 2xl:w-[57rem] xl:w-[80%] md:w-[93%] sm:w-[93%]
                    2xl:block xl:block md:block sm:block gap-6 rounded-xl pt-[50px]
                '>
                    <p className='text-center mx-auto text-[33px] mb-[50px]'>
                        What’s wrong with your cell phone?
                    </p>

                    <div className="problems">
                        {Problems && Problems.map((problem, index) => {
                            return (
                                <Problem
                                    key={index}
                                    catalog={problem}
                                    data={props.data}
                                />
                            )
                        })}
                    </div>
                </div> :
                <Loader />
            }
        </>
    )
}

export default SelectProblems