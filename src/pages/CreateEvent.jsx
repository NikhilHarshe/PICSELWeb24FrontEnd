import React, { useState } from 'react'
import { addEvent } from '../services/opretions/eventAPI'
import toast from 'react-hot-toast';

const CreateEvent = () => {

    const [formData, setFormData] = useState({
        eventName: "",
        eventDate: "",
        eventTime: "",
        eventDes: "",
        eventLink: "",
        email: "",
        password: "",
        eventManeger: "",
        eventImage: null,
    });

    const handleOnChange = (e) => {
        setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleFileChange = event => {
        const file = event.target.files[0];
        setFormData(prevState => ({
            ...prevState,
            eventImage: file
        }));
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const {
            eventName,
            eventDate,
            eventTime,
            eventDes,
            eventLink,
            email,
            password,
            eventManeger,
            eventImage
        } = formData;

        const formDataToSend = new FormData();
        formDataToSend.append('eventName', eventName);
        formDataToSend.append('eventDate', eventDate);
        formDataToSend.append('eventTime', eventTime);
        formDataToSend.append('eventDes', eventDes);
        formDataToSend.append('eventLink', eventLink);
        formDataToSend.append('email', email);
        formDataToSend.append('password', password);
        formDataToSend.append('eventManeger', eventManeger);
        formDataToSend.append('eventImage', eventImage);

        const responce  = addEvent(formDataToSend);

        if(responce){
            toast.success("Event created successfully");
        }

        setFormData({
            eventName: "",
            eventDate: "",
            eventTime: "",
            eventDes: "",
            eventLink: "",
            email: "",
            password: "",
            eventManeger: "",
            eventImage: null,
        });
    };
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label
                        htmlFor='eventName'
                    >Event Name</label>
                    <input
                        required
                        type="text"
                        name="eventName"
                        id='eventName'
                        value={formData.eventName}
                        onChange={handleOnChange}
                        placeholder='Enter Event Title !'
                    ></input>
                </div>

                <div>
                    <label
                        htmlFor='eventDes'
                    >Event Discription</label>
                    <input type="text"
                        required
                        id='eventDes'
                        name="eventDes"
                        value={formData.eventDes}
                        onChange={handleOnChange}
                        placeholder='Enter Event Description !'
                    ></input>
                </div>

                <div>
                    <label
                        htmlFor='eventDate'
                    >Event Date </label>
                    <input type="Date"
                        required
                        id='eventDate'
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleOnChange}
                        placeholder='Enter Event Date !'
                    ></input>
                </div>

                <div>
                    <label
                        htmlFor='eventTime'
                    >Event Time</label>
                    <input 
                        type="text"
                        required
                        id='eventTime'
                        name="eventTime"
                        value={formData.eventTime}
                        onChange={handleOnChange}
                        placeholder='Enter Event Title !'
                    ></input>
                </div>

                <div>
                    <label
                        htmlFor='eventLink'
                    >Event Link</label>
                    <input
                        required
                        type="text"
                        id='eventLink'
                        name="eventLink"
                        value={formData.eventLink}
                        onChange={handleOnChange}
                        placeholder='Enter Event Link !'
                    ></input>
                </div>

                <div>
                    <label
                        htmlFor='email'
                    >Email</label>
                    <input type="text"
                        required
                        id='email'
                        name="email"
                        value={formData.email}
                        onChange={handleOnChange}
                        placeholder='Enter Email !'
                    ></input>
                </div>

                <div>
                    <label
                        htmlFor='password'
                    >Password</label>
                    <input type="text"
                        required
                        id='password'
                        name="password"
                        value={formData.password}
                        onChange={handleOnChange}
                        placeholder='Enter Password !'
                    ></input>
                </div>

                <div>
                    <label
                        htmlFor='eventManeger'
                    >Event Manager</label>
                    <input type="text"
                        required
                        id='eventManeger'
                        name="eventManeger"
                        value={formData.eventManeger}
                        onChange={handleOnChange}
                        placeholder='Enter Event Maneger !'
                    ></input>
                </div>

                <div>
                    <label
                        htmlFor='eventImage'
                    >Event Time</label>
                    <input 
                        type="file"
                        required
                        id='eventImage'
                        name="eventImage"
                        // value={eventImage}
                        onChange={handleFileChange}
                        placeholder='Event Image !'
                    ></input>
                </div>

                <div>
                    <button className="w-full bg-yellow-300 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-gray-500" type='sumit'>Submit</button>
                </div>
            </form>

        </div>
    )
}

export default CreateEvent
