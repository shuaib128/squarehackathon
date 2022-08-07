import React from 'react'

const Times = (props) => {
    function timeChangeHandler(time) {
        props.setSelectedTime(time)
    }

    return (
        <>
            <div className="times">
                <div className="select">
                    <select name="format" id="format" onChange={(e) => timeChangeHandler(e.target.value)}>
                        <option selected disabled>Choose Time</option>
                        {
                            props.SelectedDate &&
                            props.appointment_times &&
                            props.appointment_times.map((time, index) => {
                                return (
                                    <option key={index} value={time}>
                                        {props.ConvertTo24(`${time}:00`)}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
        </>
    )
}

export default Times