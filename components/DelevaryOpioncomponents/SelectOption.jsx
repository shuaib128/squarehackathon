import React from 'react'
import { useRouter } from 'next/router'

const SelectOption = (props) => {
    const router = useRouter();
    
    const selectProblem = () => {
        router.push({
            pathname: '/userdata',
            query: {
                deviceType: props.data.deviceType,
                deviceImage: props.data.deviceImage,
                device: props.data.device,
                model: props.data.model,
                serviceOption: props.title,
                problem: props.data.problem
            }
        })
    }

    return (
        <div className='SelectOption container w-[100%] 2xl:w-[50%] xl:w-[50%] md:w-[100%] sm:w-[100%] 
            cursor-pointer border-[1px] border-[rgb(165, 170, 175)] hover:border-[black] mb-[50px]
        '
            onClick={selectProblem}
        >
            <img
                src={"images/" + props.img}
                alt="store"
                className='h-[250px]'
            />

            <div className="selctdevbottom px-[25px] py-[20px] pb-[30px]">
                <p className='text-xl'>
                    {props.title}
                </p>
                <p className='text-lg mt-[10px]'>
                    Phone repairs in 4 hours or less. Free diagnostics.
                </p>
            </div>
        </div>
    )
}

export default SelectOption