import React from 'react'

const Phone = (props) => {
    const phone = props.phone

    function showModels(phone) {
        props.setPhoneModels(phone.models);
        props.setSelectedPhone(phone.name)
    }

    return (
        <div className='PhonesRepairPhone' onClick={() => showModels(phone)}>
            <div className="phonerepairname">
                <p className='text-[18px] mr-3'>{phone.name}</p>
            </div>
        </div>
    )
}

export default Phone