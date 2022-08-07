import React, { useEffect, useState } from 'react'
import SubmitButton from '../SubmitButton'
import DesabledButton from '../DesabledButton'
import { ConvertTo24 } from './ConvertTo24'
import { convertMsToMinutesSeconds } from './MilliSecondToMin'
import { markdate } from './markdate'
import { getDaysInMonth } from './dayOfTheMonth'
import { makeAppointment } from './makeAppontment'
import { useRouter } from 'next/router'
import { setdate } from './setdate'
import FirstMonthArray from './FirstMonthArray'
import SecondMonthArray from './SecondMonthArray'
import Times from './Times'

const CalenderComponent = (props) => {
    const router = useRouter()

    const [SelectedTime, setSelectedTime] = useState()
    const [SelectedDate, setSelectedDate] = useState()
    const [FinalDateTime, setFinalDateTime] = useState()
    const [AppointmentTimes, setAppointmentTimes] = useState([
        "10", "11", "12", "13", "14", "15", "16",
        "17", "18", "19"
    ])
    const [UserMessage, setUserMessage] = useState("User message")

    const service_duration = convertMsToMinutesSeconds(props.ServiceDuration).split(":")[0]

    const d = new Date();

    //Months name array
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];


    //Set final datetime
    useEffect(() => {
        try {
            setFinalDateTime(
                new Date(SelectedDate.getUTCFullYear(), SelectedDate.getUTCMonth(),
                    SelectedDate.getUTCDate(), SelectedTime, 0, 0, 0)
            );
        } catch (error) {
            
        }
    }, [SelectedTime, SelectedDate])


    return (
        <div className='CalenderComponent
            pb-[100px] container mx-auto w-[90%] 2xl:w-[60rem] xl:w-[80%] md:w-[93%] sm:w-[93%]
        '>
            <p className="whreal" style={{ marginBottom: 94 }}>
                Last step! When can we meet?
            </p>
            <div className="months">
                <div>
                    <p className='monthname'>{monthNames[d.getMonth()]}</p>
                    <FirstMonthArray
                        getDaysInMonth={getDaysInMonth(d.getMonth() + 1, d.getFullYear())}
                        date={d}
                        markdate={markdate}
                        setdate={setdate}
                        setSelectedDate={setSelectedDate}
                        AppointmentList={props.AppointmentList}
                        SelectedDate={SelectedDate}
                        setAppointmentTimes={setAppointmentTimes}
                    />
                </div>

                <div>
                    <p className='monthname'>{monthNames[d.getMonth() + 1]}</p>
                    <SecondMonthArray
                        getDaysInMonth={getDaysInMonth(d.getMonth() + 2, d.getFullYear())}
                        date={d}
                        markdate={markdate}
                        setdate={setdate}
                        setSelectedDate={setSelectedDate}
                        AppointmentList={props.AppointmentList}
                        SelectedDate={SelectedDate}
                        setAppointmentTimes={setAppointmentTimes}
                    />
                </div>
            </div>

            <Times
                SelectedDate={SelectedDate}
                appointment_times={AppointmentTimes}
                ConvertTo24={ConvertTo24}
                setSelectedTime={setSelectedTime}
            />

            <textarea type="text"
                className='user_message'
                onChange={e => setUserMessage(e.target.value)}
                placeholder="Give a message"
            />

            {FinalDateTime ?
                <div
                    onClick={() => makeAppointment(
                        props.setLoading, props.data, FinalDateTime,
                        UserMessage, service_duration, router
                    )}
                >
                    <SubmitButton />
                </div> :
                <DesabledButton />
            }
        </div>
    )
}

export default CalenderComponent