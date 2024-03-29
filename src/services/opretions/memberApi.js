import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { memberEndpoints } from "../apis";
// import { setLoading } from "../../slices/authSlice";


const {
    // DELETE_MEMBER_API,
    GET_ALL_MEMBERS_DETAILS,
    GET_MEMBER_DETAILS,
    // CREATEMEMBER_API
} = memberEndpoints;


export const getMemberDetail = async (memberId) => {
    const toastId = toast.loading("loading...");
    let result = null
    try {
        const response = await apiConnector("POST", GET_MEMBER_DETAILS, {
            memberId,
        })
        console.log("GET_MEMBER_DETAILS RESPONSE............", response)

        if (!response.data.success) {
            throw new Error(response.data.message)
        }
        result = response.data
    } catch (error) {
        console.log("GET_MEMBER_DETAILS ERROR............", error)
        result = error.response.data
        // toast.error(error.response.data.message);
    }
    toast.dismiss(toastId)
    return result
}

export const getAllMembers = async () => {
    let result = []
    const toastId = toast.loading("loading...");
    console.log("Get_all_members_details url : " ,GET_ALL_MEMBERS_DETAILS);
    try {
        const response = await apiConnector("GET", GET_ALL_MEMBERS_DETAILS)

        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Member data")
        }
        result = response?.data?.data
    } catch (error) {
        console.log("GET_ALL_MEMBERS_DETAILS API ERROR.......", error)
        // console.log(error.message)
    }
    toast.dismiss(toastId)
    return result
}