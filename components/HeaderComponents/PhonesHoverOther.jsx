import React from 'react'
import OtherPhoneHoverOtherBlock from './OtherPhoneHoverBlock'

const PhonesHoverOther = () => {
    return (
        <div className='PhonesHover py-[20px] bg-[white] pb-0'>
            <OtherPhoneHoverOtherBlock
                name="Tablet"
                image="images/tablet.png"
            />

            <OtherPhoneHoverOtherBlock
                name="Computer"
                image="images/laptop.png"
            />
        </div>
    )
}

export default PhonesHoverOther