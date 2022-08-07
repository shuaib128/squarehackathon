import React from 'react'
import Router from 'next/router'

const PhoneHoverBlock = (props) => {

    const goToSearch = () => {
        Router.push({
            pathname: '/tablet-repair'
        })
    }
    
    return (
        <div className='PhoneHoverBlock' onClick={goToSearch}>
            <div className="phonehverimage">
                <img src={props.image} alt="gover" />
            </div>

            <div className="hovername">
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default PhoneHoverBlock