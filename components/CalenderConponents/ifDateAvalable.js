export function ifDateAvalable(date, appointment_list) {
    let abalable = false
    try {
        /**
     * Checks if the day is sat or sun
     * if sat or sun then chcks the appontment_list if all time slot has been booked or not by checking lenght
     */
        if (date.slice(0, 3) === 'Sat' || date.slice(0, 3) === "Sun") {
            appointment_list.map((appointment) => {
                if (appointment.date === date) {
                    if (appointment.appointment_count === 14) {
                        abalable = true
                    }
                }
            })
        }
        
        /**
         * Checks other days
         * chcks the appontment_list if all time slot has been booked or not by checking lenght
         */
        else {
            appointment_list.map((appointment) => {
                if (appointment.date === date) {
                    if (appointment.appointment_count === 18) {
                        abalable = true
                    }
                }
            })
        }
    } catch (error) {
        
    }

    return abalable
}