import { ConvertTo24 } from "./ConvertTo24";
import { BackendLink } from "../../utils/BackendLink";
import axios from "axios";


export const makeAppointment = (
    setLoading, data, FinalDateTime, UserMessage,
    service_duration, router
) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setLoading(false)
    Object.assign(data, {
        selectedDate: FinalDateTime,
        UserMessage: UserMessage,
        ServiceDuration: parseInt(service_duration)
    })


    try {
        axios.post(`${BackendLink}/api/booking/book`, {
            data: data,
        })
            .then((res) => {
                if (res.data.booked === "booked") {
                    router.push({
                        pathname: '/confirmation',
                        query: {
                            userName: data.userName,
                            userEmail: data.userEmail,
                            userNumber: data.userNumber,
                            selectedDate: JSON.stringify(FinalDateTime),
                            model: data.model
                        }
                    })
                }
                else {
                    setLoading(true)
                }
            });
    } catch {
        setLoading(true)
    }


    //Make appontment in heroku
    let date = String(FinalDateTime).slice(0, 15)
    let service_name = data.service.item_data.name;
    let time = ConvertTo24(`${String(FinalDateTime).slice(16, 18)}:00`)
    let user_name = data.userName
    let user_email = data.userEmail
    let user_adress = data.adress
    let user_phone_number = data.userNumber

    try {
        axios.post(`${BackendLink}/api/booking/create/appointment`, {
            date: date,
            serviceName: service_name,
            time: time,
            userName: user_name,
            userEmail: user_email,
            userAdress: user_adress,
            userPhoneNumber: user_phone_number
        })
            .then((res) => {
            });
    } catch {
    }
}