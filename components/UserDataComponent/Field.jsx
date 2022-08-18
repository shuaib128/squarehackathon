import React from 'react'
import { IsNumberValid } from '../../utils/IsphoneNumber'
import { validateEmail } from '../../utils/IsEmail'

const Field = (props) => {
    //Set state value
    const setStateValue = (e) => {
        //Check Number if the placeholder is phone then set value for phone
        if (props.placeholder === "Phone number") {
            props.setIsValidNumber(IsNumberValid(e));

            if (IsNumberValid(e)) {
                props.setValue(e)
            }
        }
        //Check Adress and get adress auto complete
        //If the placeholder is adress then set value for adress
        else if (props.placeholder === "Adress") {
            var input = document.getElementById('AdressField');

            var autocomplete = new google.maps.places.Autocomplete(input, {
                componentRrestrictions: { 'country': ["US"] }
            });
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                props.setValue(place.formatted_address);
            })
        }
        else if (props.placeholder === "Email") {
            props.setIsValidEmail(validateEmail(e));
            if (validateEmail(e)) {
                props.setValue(e)
            }
        }
        //If other field then set value for those.
        else {
            props.setValue(e)
        }
    }



    if (props.placeholder === "Adress") {
        return (
            <div className='Field  w-[100%]'>
                <div className='Field  w-[100%]'>
                    <input
                        id='AdressField'
                        className='px-6 border-[1px] border-[rgb(165, 170, 175)] w-[100%] h-[60px]
                        hover:border-[black] rounded
                        mt-5 2xl:mt-0 xl:mt-0 md:mt-5 sm:mt-5
                        '
                        type={props.type}
                        placeholder={props.placeholder}
                        required
                        onChange={(e) => setStateValue(e.target.value)}
                    />
                </div>
            </div>
        )
    } else if (props.placeholder === "Email") {
        return (
            <>
                <div className='Field  w-[100%]'>
                    <input
                        className='px-6 border-[1px] border-[rgb(165, 170, 175)] w-[100%] h-[60px]
                    hover:border-[black] rounded
                        mt-5 2xl:mt-0 xl:mt-0 md:mt-5 sm:mt-5
                    '
                        type={props.type}
                        placeholder={props.placeholder}
                        required
                        onChange={(e) => setStateValue(e.target.value)}
                    />
                    {
                        !props.IsValidEmail && props.placeholder === "Email" ?
                            <p className='validFielsValue'>Use a valid Email</p> :
                            <p></p>
                    }
                </div>
            </>
        )
    } else if (props.placeholder === "Phone number") {
        return (
            <>
                <div className='Field  w-[100%]'>
                    <input
                        className='px-6 border-[1px] border-[rgb(165, 170, 175)] w-[100%] h-[60px]
                    hover:border-[black] rounded
                        mt-5 2xl:mt-0 xl:mt-0 md:mt-5 sm:mt-5
                    '
                        type={props.type}
                        placeholder={props.placeholder}
                        required
                        onChange={(e) => setStateValue(e.target.value)}
                    />
                    {
                        !props.IsValidNumber && props.placeholder === "Phone number" ?
                            <p className='validFielsValue'>Use a valid number</p> :
                            <p></p>
                    }
                </div>
            </>
        )
    } else {
        return (
            <div className='Field  w-[100%]'>
                <input
                    className='px-6 border-[1px] border-[rgb(165, 170, 175)] w-[100%] h-[60px]
                    hover:border-[black] rounded
                        mt-5 2xl:mt-0 xl:mt-0 md:mt-5 sm:mt-5
                    '
                    type={props.type}
                    placeholder={props.placeholder}
                    required
                    onChange={(e) => setStateValue(e.target.value)}
                />
            </div>
        )
    }
}

export default Field