import React from 'react'
import { useRouter } from 'next/router'

const Models = (props) => {
    const router = useRouter();
    const phones = props.PhoneModels

    //Go to select delevary option page
    const goToDevelaryPage = (data) => {
        router.push({
            pathname: '/selectProblem',
            query: {
                deviceType: "Cell Phone",
                deviceImage: data.image,
                device: props.SelectedPhone,
                model: data.name
            }
        })
    }

    return (
        <div className="phonerepairphones pb-[100px] mt-[50px] container mx-auto 
            w-[90%] 2xl:w-[75rem] xl:w-[80%] md:w-[93%] sm:w-[93%] grid
            grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1
            gap-6
        ">
            {phones.map((phone, index) => {
                return (
                    <div key={index} className='PhonesRepairPhone' onClick={() => goToDevelaryPage(phone)}>
                        <div className="phonerepairname">
                            <p className='text-[18px] mr-3'>{phone.name}</p>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default Models