import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { eventEndpoints } from "../apis";

const {
    CREATEEVENT_API,
    EDITEVENT_API,
    GET_ALL_EVENTS_API,
    GET_EVENT_DETAILS_API,
    DELETE_EVENT_API
} = eventEndpoints;

export const addEvent = async ( data, token ) => {
    let result = null
    const toastId = toast.loading("loading...");
    try {
        const response = await apiConnector("POST", CREATEEVENT_API, data,
            {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            })

        console.log("CREATE Event API RESPONSE......", response)

        if (!response?.data?.success) {
            throw new Error("Could Not Create Event")
        }

        result = response?.data?.data
    } catch (error) {
        console.log("CREATE EVENT API ERROR............", error)
        console.log("error message   ", error.message)
    }

    toast.dismiss(toastId)
    return result
}

export const editEventData = async (data, token) => {
    let result = null
    const toastId = toast.loading("loading...");
    try {
        const response = await apiConnector("POST", EDITEVENT_API, data, {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        })

        console.log("EDIT EVENT API RESPONSE........", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Update Event Details")
        }

        result = response?.data?.data
    }
    catch (error) {
        console.log("Edit Event api error.....", error)
    }
    toast.dismiss(toastId)
    return result
}

export const getAllEventes = async () => {
    let result = []
    const toastId = toast.loading("loading...");
    try {
        const response = await apiConnector("GET", GET_ALL_EVENTS_API)

        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Event data")
        }
        result = response?.data?.data
    } catch (error) {
        console.log("GET_ALL_EVENTS_API API ERROR.......", error)
        // console.log(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const fetchEventDetails = async (eventId) => {
    const toastId = toast.loading("loading...");
    let result = null
    try {
        const response = await apiConnector("POST", GET_EVENT_DETAILS_API, {
            eventId,
        })
        console.log("GET_EVENT_DETAILS_API RESPONSE............", response)

        if (!response.data.success) {
            throw new Error(response.data.message)
        }
        result = response.data
    } catch (error) {
        console.log("GET_EVENT_DETAILS_API ERROR............", error)
        result = error.response.data
        // toast.error(error.response.data.message);
    }
    toast.dismiss(toastId)
    return result
}

export const deleteEvent = async (eventId, token) => {
    const toastId = toast.loading("Loading...");
    let result = null;
    try {
        console.log("Data in eventAPI ", eventId);
        const response = await apiConnector("DELETE", DELETE_EVENT_API, { eventId },
            {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
            });
        console.log("DELETE Event API RESPONSE............", response);
        if (!response?.data?.success) {
            toast.error("Could Not Delete Event");
            throw new Error("Could Not Delete Event");
        }
        toast.success("Event Deleted");
        result = response?.data;
    } catch (error) {
        console.log("DELETE EVENT API ERROR............", error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};
