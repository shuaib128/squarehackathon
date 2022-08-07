import React from 'react'
import { useRouter } from 'next/router'
import { returnIcon } from './returnIcon'

const Problem = (props) => {
    const router = useRouter();
    /**
     * Get the catalog object
     * Get name and split ["name", "problem"]
     * Get problem and show
     */
    const catalogNameProblem = props.catalog.item_data.name.split("-")
    const problemname = catalogNameProblem[1]

    const variation_price_object = props.catalog.item_data.variations[0].item_variation_data.price_money

    const goToUserDataPage = (name) => {
        router.push({
            pathname: '/delevaryoption',
            query: {
                deviceType: props.data.deviceType,
                deviceImage: props.data.deviceImage,
                device: props.data.device,
                model: props.data.model,
                serviceOption: props.data.serviceOption,
                problem: name
            }
        })
    }

    return (
        <div className='Problem' onClick={() => goToUserDataPage(problemname)}>
            <div className='Prblem_up flex'>
                {returnIcon(problemname) ?
                    <img src={`images/service_icons/${returnIcon(problemname)}`} alt="" /> :
                    <div style={{display: "none"}}></div>
                }
                <p className='font-semibold ml-4'>
                    {problemname}
                </p>
            </div>

            <p className='problemprice'>

                {variation_price_object ?
                    "$" + variation_price_object.amount / 100 :
                    "undefuned"
                }
            </p>
        </div>
    )
}

export default Problem