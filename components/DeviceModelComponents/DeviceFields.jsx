import React, { useEffect } from 'react'
import SubmitButton from '../SubmitButton'
import DesabledButton from '../DesabledButton'
import { useRouter } from 'next/router'

const DeviceFields = (props) => {
    const router = useRouter();

    //Set device model based on the device
    useEffect(() => {
        if (props.Devices) {
            props.Devices.map((device, index) => {
                if (device.name === props.SelectedDevice) {
                    props.setModels(device.models);
                    props.setSelectedModel(device.models[0].name);
                }
            })
        }
    }, [props.SelectedDevice])

    //Go to select delevary option page
    const goToDevelaryPage = () => {
        router.push({
            pathname: '/selectProblem',
            query: {
                deviceType: props.data.deviceType,
                deviceImage: props.data.deviceImage,
                device: props.SelectedDevice,
                model: props.SelectedModel
            }
        })
    }


    return (
        <div className='DeviceFields pb-[100px] container mx-auto w-[90%] 2xl:w-[57rem] xl:w-[80%] md:w-[93%] sm:w-[93%]'>
            <h1 className='text-center text-[33px] mb-[50px]'>
                Tell us about your cell phone
            </h1>
            <div className="device">
                <p className='text-[20px] font-medium'>
                    What {props.data.deviceType} is it?
                </p>

                <div className='selectionblock'>
                    <label>Select {props.data.deviceType}</label>
                    <select
                        name={props.data.deviceType}
                        className="brands"
                        value={props.SelectedDevice && props.SelectedDevice}
                        onChange={(e) => props.setSelectedDevice(e.target.value)}
                    >
                        <option>--</option>
                        {props.Devices && props.Devices.map((device, index) => (
                            <option key={index} value={device.name}>
                                {device.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>


            {props.Models.length !== 0 ?
                <div className='device'>
                    <p className='text-[20px] font-medium'>
                        What {props.SelectedDevice} is it?
                    </p>

                    <p className='what_device_p'>What {props.SelectedDevice} is it?</p>
                    <div className="brands_section">
                        <div className='selectionblock'>
                            <label>Select {props.SelectedDevice}</label>
                            <select
                                name={props.data.deviceType}
                                className="brands"
                                value={props.SelectedModel && props.SelectedModel}
                                onChange={(e) => props.setSelectedModel(e.target.value)}
                            >
                                {props.Models && props.Models.map((model, index) => (
                                    <option key={index} value={model.name}>
                                        {model.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div> :
                <div></div>
            }

            {props.SelectedDevice ?
                <div onClick={goToDevelaryPage}>
                    <SubmitButton />
                </div> :
                <DesabledButton />
            }
        </div>
    )
}

export default DeviceFields