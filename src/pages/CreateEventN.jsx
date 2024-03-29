import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { setEvent } from '../slices/eventSlice';
import toast from 'react-hot-toast';
import { addEvent, editEventData } from '../services/opretions/eventAPI';
import Upload from '../Components/Upload';
import IconBtn from '../Components/IconBtn';
// import { MdNavigateNext } from "react-icons/md"
import logo from "../data/Create_Event_logo.png"
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';

const CreateEventN = () => {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { event, editEvent } = useSelector((state) => state.eventData)
    const [loading, setLoading] = useState(false)
    // const [showPassword, setShowPassword] = useState(false)
    const { token } = useSelector((state) => state.auth)


    useEffect(() => {
        if (editEvent) {
            setValue("eventName", event.eventName)
            setValue("eventDate", event.eventDate)
            setValue("eventTime", event.eventTime)
            setValue("eventDes", event.eventDes)
            setValue("eventLink", event.eventLink)
            setValue("eventLocation", event.eventLocation)
            // setValue("email", event.email)
            // setValue("password", event.password)
            setValue("eventManeger", event.eventManeger)
            setValue("eventImage", event.eventImage)
        }
        // console.log("editEvent .............", editEvent);
    }, []);
    console.log("editEvent .............", editEvent);

    const isFormUpdated = () => {
        const currentValues = getValues();

        if (currentValues !== event)
            return true
        else
            return false
    }

    const onSubmit = async (data, e) => {
        e.preventDefault()
        console.log("data ", data);

        if (editEvent) {
            if (isFormUpdated()) {
                console.log("isFormUpdated in Edite ", event);

                const currentValues = getValues()
                const formData = new FormData()

                formData.append("eventId", event._id)
                if (currentValues.eventName !== event.eventName) {
                    formData.append("eventName", data.eventName)
                }
                if (currentValues.eventDate !== event.eventDate) {
                    formData.append("eventDate", data.eventDate)
                }
                if (currentValues.eventTime !== event.eventTime) {
                    formData.append("eventTime", data.eventTime)
                }
                if (currentValues.eventDes !== event.eventDes) {
                    formData.append("eventDes", data.eventDes)
                }
                if (currentValues.eventLink !== event.eventLink) {
                    formData.append("eventLink", data.eventLink)
                }
                if (currentValues.eventLocation !== event.eventLocation) {
                    formData.append("eventLocation", data.eventLocation)
                }
                // if (currentValues.email !== event.email) {
                //     formData.append("email", data.email)
                // }
                // if (currentValues.password !== event.password) {
                //     formData.append("password", data.password)
                // }
                if (currentValues.eventManeger !== event.eventManeger) {
                    formData.append("eventManeger", data.eventManeger)
                }
                if (currentValues.eventImage !== event.eventImage) {
                    formData.append("eventImage", data.eventImage)
                }

                console.log("Edit Form data: ", formData)

                setLoading(true)

                const result = await editEventData(formData, token)
                setLoading(false)
                if (result) {
                    toast.success("Event Edited Successfully");
                    console.log("result in Edite Event ", result);
                    dispatch(setEvent(result))
                    navigate(`/event/${result?._id}`)
                }
            }
            else {
                toast.error("No changes made to the form")
            }

            return
        }

        const formData = new FormData()
        formData.append("eventName", data.eventName)
        formData.append("eventDate", data.eventDate)
        formData.append("eventTime", data.eventTime)
        formData.append("eventDes", data.eventDes)
        formData.append("eventLink", data.eventLink)
        formData.append("eventLocation", data.eventLocation)
        // formData.append("email", data.email)
        // formData.append("password", data.password)
        formData.append("eventManeger", data.eventManeger)
        formData.append("eventImage", data.eventImage)

        setLoading(true);
        toast.loading("Loading")
        const result = await addEvent(formData, token)
        // console.log("data 2", data);
        toast.dismiss();
        setLoading(false);
        e.target.reset();

        if (result) {
            dispatch(setEvent(result))
            toast.success("Event Created Successfully")
        }
        else {
            toast.error("Evetn Creation Faild");
        }

        // setLoading(false)
        // dispatch(toast)
    }

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="custom-loader"></div>
                <h1 className=' text-blue-100 mt-4'>Loading...</h1>
            </div>
        )
    }

    return (

        <div className="grid grid-cols-2">
            <div className='text-blue-100 flex flex-col items-center mt-14'>
                {
                    editEvent ? (<h1 className='text-blue-100 mb-8 text-4xl font-bold'>Edit EVENTS 😐😍🥳</h1>) : (<h1 className='text-blue-100 mb-8 text-4xl font-bold'>CREATE NEW EVENTS 😍🥳</h1>)
                }
                <form className=' to-blue-100 flex flex-col gap-7 justify-center items-center'>

                    {/* event name */}
                    <div className='flex flex-col'>
                        <label htmlFor="eventName">
                            <span className='text-lg font-semibold'> Event Name</span>
                            <sup className="text-red-500">*</sup>
                        </label>
                        <input
                            className='w-96 px-2 py-1 mt-1 form-style'
                            id="eventName"
                            placeholder="Enter Event Name"
                            {...register("eventName", { required: true })}
                        />
                        {errors.eventName && (
                            <span className='text-xs text-red-500'>
                                Event title is required
                            </span>
                        )}
                    </div>

                    {/* event Date */}
                    <div className='flex flex-col'>
                        <label htmlFor="eventDate">
                            <span className='text-lg font-semibold'>Event Date</span>
                            <sup className="text-red-500">*</sup>
                        </label>
                        <input className='w-96 px-2 py-1 mt-1 form-style'
                            type='date'
                            id="eventDate"
                            placeholder="Enter eventDate "
                            {...register("eventDate", { required: true })}
                        />
                        {errors.eventDate && (
                            <span className='text-xs text-red-500'>
                                Event Date is required
                            </span>
                        )}
                    </div>

                    {/* event Time */}
                    <div className='flex flex-col'>
                        <label htmlFor="eventTime">
                            <span className='text-lg font-semibold'>Event Time</span>
                            <sup className="text-red-500">*</sup>
                        </label>
                        <input
                            className='w-96 px-2 py-1 mt-1 form-style'
                            // type='time'
                            id="eventTime"
                            placeholder="Enter eventTime "
                            {...register("eventTime", { required: true })}
                        />
                        {errors.eventTime && (
                            <span className='text-xs text-red-500'>
                                Event Time is required
                            </span>
                        )}
                    </div>

                    {/* event Des */}
                    <div className='flex flex-col' >
                        <label htmlFor="eventDes">
                            <span className='text-lg font-semibold'>Event Description</span>
                            <sup className="text-red-500">*</sup>
                        </label>
                        <input
                            className='w-96 px-2 py-1 mt-1 form-style'
                            id="eventDes"
                            placeholder="Enter Event Description "
                            {...register("eventDes", { required: true })}
                        />
                        {errors.eventDes && (
                            <span className='text-xs text-red-500'>
                                Event Des is required
                            </span>
                        )}
                    </div>

                    {/* event Link */}
                    <div className='flex flex-col' >
                        <label htmlFor="eventLink">
                            <span className='text-lg font-semibold'>Event Link</span>
                            <sup className="text-red-500">*</sup>
                        </label>
                        <input
                            className='w-96 px-2 py-1 mt-1 form-style'
                            id="eventLink"
                            placeholder="Enter Event Link "
                            {...register("eventLink", { required: true })}
                        />
                        {errors.eventLink && (
                            <span className='text-xs text-red-500'>
                                Event Link is required
                            </span>
                        )}
                    </div>

                    {/* event Location */}
                    <div className='flex flex-col' >
                        <label htmlFor="eventLocation">
                            <span className='text-lg font-semibold'>Event Location</span>
                            {/* <sup className="text-red-500">*</sup> */}
                        </label>
                        <input
                            id="eventLocation"
                            placeholder="Enter Event Location"
                            className='w-96 px-2 py-1 mt-1 form-style'
                            {...register("eventLocation")}
                        />
                        {/* {errors.eventManeger && (
                            <span className='text-xs text-red-500'>
                                Event Maneger is required
                            </span>
                        )} */}
                    </div>

                    {/* event Maneger */}
                    <div className='flex flex-col' >
                        <label htmlFor="eventManeger">
                            <span className='text-lg font-semibold'>Event Manager/Head</span>
                            <sup className="text-red-500">*</sup>
                        </label>
                        <input
                            id="eventManeger"
                            placeholder="Enter Event Maneger/Head"
                            className='w-96 px-2 py-1 mt-1 form-style'
                            {...register("eventManeger", { required: true })}
                        />
                        {errors.eventManeger && (
                            <span className='text-xs text-red-500'>
                                Event Maneger is required
                            </span>
                        )}
                    </div>

                    {/* email */}
                    {/* <div className='flex flex-col' >
                        <label htmlFor="email">
                            <span className='text-lg font-semibold '> Email</span>
                            <sup className="text-red-500">*</sup>
                        </label>
                        <input
                            className='w-96 px-2 py-1 mt-1 form-style'
                            id="email"
                            placeholder="Enter Email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <span className='text-xs text-red-500'>
                                Email is required
                            </span>
                        )}
                    </div> */}

                    {/* password */}
                    {/* <div className='flex flex-col relative' >
                        <label htmlFor="password">
                            <span className='text-lg font-semibold'>Password</span>
                            <sup className="text-red-500">*</sup>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            className='w-96 px-2 py-1 mt-1 form-style'
                            id="password"
                            placeholder="Enter Password"
                            {...register("password", { required: true })}
                        />
                        <span
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                        >
                            {showPassword ? (
                                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                            ) : (
                                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                            )}
                        </span>
                        {errors.password && (
                            <span className='text-xs text-red-500'>
                                Password is required
                            </span>
                        )}
                    </div> */}

                    {/* Upload Img */}
                    <div className=''>
                        <Upload
                            name="eventImage"
                            label="Event Thumbnail"
                            register={register}
                            setValue={setValue}
                            errors={errors}
                            editData={editEvent ? event?.eventImage : null}
                        />
                    </div>

                    {/* Button */}
                    <div className=' mb-11 flex justify-between w-full'>
                        <div onClick={handleSubmit(onSubmit)}>
                            <IconBtn disabled={loading} text={!editEvent ? "Create Event" : "Save Changes"} >
                                {/* <MdNavigateNext /> */}
                            </IconBtn>
                        </div>
                        <div onClick={() => navigate("/")}>
                            <IconBtn disabled={loading} text={"Cancel"} >
                                {/* <MdNavigateNext /> */}
                            </IconBtn>
                        </div>


                    </div>
                </form>
            </div>
            <div className=' '>
                <div className="relative w-[80%] mt-16 h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
                    <img
                        src={logo}
                        alt="timelineImage"
                        className="shadow-gray-400 shadow-[15px_15px_0px_0px] object-cover h-[400px] lg:h-fit"
                    />
                </div>
            </div>
        </div>

    )
}

export default CreateEventN
