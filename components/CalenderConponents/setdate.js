const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(' ');

    let [hours, minutes] = time.split(':');
    if (hours === '12') {
        hours = '00';
    }
    if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }

    return `${hours}`;
}


function CheckFreeTimes(time_array, appontment) {
    appontment.times.map((time) => {
        if (time.appointments.length >= 2) {
            const target_time = convertTime12to24(time.time.slice(0, 8))
            time_array = time_array.filter(t => {
                return t !== target_time
            })
        }
    })

    return time_array
}


function SetTimes(setAppointmentTimes, AppointmentList, clicked_date, clicked_date_day) {
    AppointmentList.map((appontment) => {
        if (appontment.date === clicked_date) {
            switch (clicked_date_day) {
                case "Sat":
                    setAppointmentTimes(CheckFreeTimes(
                        ["10", "11", "12", "13", "14", "15", "16"], appontment
                    ))
                    break;

                case "Sun":
                    setAppointmentTimes(CheckFreeTimes(
                        ["10", "11", "12", "13", "14", "15", "16"], appontment
                    ))
                    break;

                default:
                    setAppointmentTimes(CheckFreeTimes(
                        ["10", "11", "12", "13", "14", "15", "16", "17", "18"], appontment
                    ))
                    break;
            }
        } else {
        }
    })
}


export const setdate = (
    date, month, year, setSelectedDate, setAppointmentTimes, AppointmentList
) => {
    const date_utc = new Date(Date.UTC(year, month, date, 14))
    setSelectedDate(date_utc);

    let clicked_date_day = String(date_utc).slice(0, 3)
    let clicked_date = String(date_utc).slice(0, 15)

    try {
        switch (clicked_date_day) {
            case "Sat":
                setAppointmentTimes(["10", "11", "12", "13", "14", "15", "16"])
                break;

            case "Sun":
                setAppointmentTimes(["10", "11", "12", "13", "14", "15", "16"])
                break;

            default:
                setAppointmentTimes(["10", "11", "12", "13", "14", "15", "16", "17", "18"])
                break;
        }

        SetTimes(setAppointmentTimes, AppointmentList, clicked_date, clicked_date_day)
    } catch (error) {

    }
}