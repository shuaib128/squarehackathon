import React from 'react'
import { getDayName } from './getDayName'
import { ifDateAvalable } from './ifDateAvalable';

const SecondMonthArray = (props) => {
    const Date_ = props.date

    return (
        <>
            <ul className='monthone mb-2'>
                {[...Array(props.getDaysInMonth)].slice(0, 7).map((e, i) => {
                    return (
                        <li className='monthoneday' key={i}>
                            {getDayName(Date_.getMonth() + 2, i + 1, Date_.getFullYear())}
                        </li>
                    )
                })}
            </ul>
            <ul className='monthone monthtwo'>
                {[...Array(props.getDaysInMonth)].map((e, i) => {
                    const date_utc = new Date(Date.UTC(props.date.getFullYear(), props.date.getMonth() + 1, i + 1, 14))

                    if (!ifDateAvalable(String(date_utc).slice(0, 15), props.AppointmentList)) {
                        return (
                            <span onClick={(e) => props.markdate(e.target)} key={i}>
                                <li
                                    onClick={() => props.setdate(
                                        i + 1, props.date.getMonth() + 1, props.date.getFullYear(),
                                        props.setSelectedDate, props.setAppointmentTimes,
                                        props.AppointmentList
                                    )}
                                    className='monthoneday'
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

export default SecondMonthArray