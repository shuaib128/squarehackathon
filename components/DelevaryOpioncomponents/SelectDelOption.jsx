import React from 'react'
import SelectOption from './SelectOption'

const SelectDelOption = (props) => {
    return (
        <div className='SelectDelOptions pb-[80px] 
            container block mx-auto w-[90%] 2xl:w-[57rem] xl:w-[80%] md:w-[93%] sm:w-[93%]
            2xl:flex xl:flex md:flex sm:block gap-6 rounded-xl pt-[50px]
        '>
            <SelectOption
                title="Carry In"
                img="storeimage.webp"
                data={props.data}
            />
            <SelectOption
                title="Mail-in Repair"
                img="develary.jpg"
                data={props.data}
            />
        </div>
    )
}

export default SelectDelOption