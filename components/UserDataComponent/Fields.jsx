import React, { useState } from 'react'
import Field from './Field'
import { useRouter } from 'next/router'
import SubmitButton from '../SubmitButton'
import DesabledButton from '../DesabledButton'
import axios from 'axios'
import { BackendLink } from '../../utils/BackendLink'

const Fields = (props) => {
    const [IsValidNumber, setIsValidNumber] = useState(true)
    const [IsValidEmail, setIsValidEmail] = useState(true)

    // Get previous page information
    const router = useRouter();
    const data = router.query;

    //Get first two words
    function removeLastWord(str) {
        const lastIndexOfSpace = str.lastIndexOf(' ');

        if (lastIndexOfSpace === -1) {
            return str;
        }

        return str.substring(0, lastIndexOfSpace);
    }

    //Go to confirm page
    const goToConfirmPage = () => {
        props.setLoading(true)
        //Filter the service from props.servoces
        const serviceToQuery = `${data.model}-${data.problem}`.toLowerCase()

        //Assings data with other values
        if (props.Services.item_data.name.toLowerCase() === serviceToQuery) {
            //Sends data back to check if the user exists
            //If user does not exists then creates a user
            try {
                axios.post(`${BackendLink}/api/booking/user`, {
                    email: props.Email,
                    FirstName: removeLastWord(props.Name),
                    LastName: props.Name.split(' ').pop(),
                    PhoneNumber: props.PhoneNumber,
                    Adress: props.Adress,
                })
                    .then((res) => {
                        if (res.data.userstatus === "exists") {
                            try {
                                Object.assign(data, {
                                    userName: props.Name,
                                    userEmail: props.Email,
                                    userNumber: props.PhoneNumber,
                                    adress: props.Adress,
                                    service: props.Services,
                                    userID: res.data.userid
                                })
                                router.push({
                                    pathname: '/calender',
                                    query: {
                                        service: JSON.stringify(data)
                                    }
                                })
                            } catch (error) {
                                alert("Use a valid E-mail adress")
                            }
                        } else {
                            alert("Use a valid E-mail adress")
                        }
                    });
            } catch {
            }
        }
        else {
        }
    }
    

    return (
        <div className='mt-[50px]'>
            <p className='text-center mx-auto text-[33px]'>
                How can we reach you?
            </p>
            <p className='text-center mx-auto text-[22px] mb-[10px]'>
                We&lsquo;ll only use this information to contact you about your repair.
            </p>

            <div className='Fields pb-[80px]
                container block mx-auto w-[90%] 2xl:w-[57rem] xl:w-[80%] md:w-[93%] sm:w-[93%]
                2xl:grid xl:grid md:block sm:block gap-4 rounded-xl pt-[50px]
                2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1
            '>
                <Field
                    type="text"
                    placeholder="Full name"
                    setValue={props.setName}
                />
                <Field
                    type="email"
                    placeholder="Email"
                    setValue={props.setEmail}
                    IsValidEmail={IsValidEmail}
                    setIsValidEmail={setIsValidEmail}
                />
                <Field
                    type="tel"
                    placeholder="Phone number"
                    setValue={props.setPhoneNumber}
                    IsValidNumber={IsValidNumber}
                    setIsValidNumber={setIsValidNumber}
                />
                <Field
                    type="text"
                    placeholder="Adress"
                    setValue={props.setAdress}
                />

                {props.Name && props.Email && props.PhoneNumber && props.Adress && IsValidNumber ?
                    <div onClick={goToConfirmPage}><SubmitButton /></div> :
                    <DesabledButton />
                }
            </div>

            <p className='Fields pb-[80px] container block mx-auto w-[90%] 2xl:w-[57rem] xl:w-[80%] 
                md:w-[93%] sm:w-[93%] text-[15px]
            '>
                By submitting your information on this form, you are agreeing to be contacted
                regarding your service request by telephone, email, or text including using
                pre-recorded or auto dialed phone calls or text messages to the phone number
                you have provided, including your wireless number, if provided. Consent
                to content doesn&lsquo;t require you to purchase service. By sharing your email
                address, you also agree to receive marketing communications. Please see our Privacy Policy
                and Terms also Conditions for more detail.
            </p>
        </div>
    )
}

export default Fields