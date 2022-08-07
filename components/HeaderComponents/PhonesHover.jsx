import React from 'react'
import PhoneHoverBlock from './PhoneHoverBlock'
import OtherPhoneHoverBlock from './OtherPhoneHoverBlock'

const PhonesHover = () => {
    return (
        <div className='PhonesHover py-[20px] bg-[white] pb-0'>
            <PhoneHoverBlock
                name="Iphone"
                image="images/iphone.jpg"
            />

            <PhoneHoverBlock
                name="Samsung"
                image="images/samsung.png"
            />

            <PhoneHoverBlock
                name="Google"
                image="images/google.png"
            />

            <OtherPhoneHoverBlock
                name="Other"
                image="images/otherphone.png"
            />
        </div>
    )
}

export default PhonesHover