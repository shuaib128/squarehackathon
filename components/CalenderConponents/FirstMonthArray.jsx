import React from 'react'
import { getDayName } from './getDayName'
import { ifDateAvalable } from './ifDateAvalable';

const FirstMonthArray = (props) => {
    const Date_ = props.date

    function FinalizeDateTime(i) {
        props.setdate(
            i + 1, props.date.getMonth(), props.date.getFullYear(),
            props.setSelectedDate, props.setAppointmentTimes, 
            props.AppointmentList
        )
    }

    return (
        <>
            <ul className='monthone mb-2'>
                {[...Array(props.getDaysInMonth)].slice(0, 7).map((e, i) => {
                    return (
                        <li className='monthoneday' key={i}>
                            {getDayName(Date_.getMonth() + 1, i + 1, Date_.getFullYear())}
                        </li>
                    )
                })}
            </ul>

            <ul className='monthone'>
                {[...Array(props.getDaysInMonth)].map((e, i) => {
                    //Check if date has been passed or not
                    const date_utc = new Date(Date.UTC(props.date.getFullYear(), props.date.getMonth(), i + 1, 14))
                    if (
                        i >= props.date.getDate() && 
                        props.date.getMonth() + 1 &&
                        !ifDateAvalable(String(date_utc).slice(0, 15), props.AppointmentList)
                    ) {
                        //markdate is to mark the date
                        //Setdate sets date and time for appointment
                        return (
                            <span onClick={(e) => props.markdate(e.target)} key={i}>
                                <li
                                    className='monthoneday'
                                    onClick={() => FinalizeDateTime(i)}
                                >
                                    {i + 1}
                                </li>
                            </span>
                        )
                    } else {
                        return (
                            <li className='monthonedaydebaibled'>
                                {i + 1}
                            </li>
                        )
                    }
                })}
            </ul>
        </>
    )
}

export default FirstMonthArray