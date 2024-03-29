import { endpoints } from "../apis";
import { apiConnector } from "../apiConnector"
import toast from "react-hot-toast";
import { setLoading, setToken } from "../../slices/authSlice";
import { setUser } from "../../slices/profileSlice";

const {
    DELETEUSER_API,
    LOGIN_API,
    CREATEUSER_API,
    GET_USER_DETAILS_API
} = endpoints;

export function signup(
    firstName,
    lastName,
    UplodedImage,
    email,
    password,
    confirmPassword) {
    return async () => {
        try {
            const response = await apiConnector("POST", CREATEUSER_API, {
                firstName,
                lastName,
                email,
                password,
                UplodedImage,
                confirmPassword
            })

            console.log("Signup API response.....", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }
        }
        catch (error) {
            console.log("Signup API Error...", error)
        }
    }
}

export function getUserDetails(token, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        console.log("userApi function is called");
        const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
          Authorization: `Bearer ${token}`,
        })
        console.log("GET_USER_DETAILS API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        const userImage = response.data.data.image
          ? response.data.data.image
          : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`
        dispatch(setUser({ ...response.data.data, image: userImage }))
      } catch (error) {
        dispatch(logout(navigate))
        console.log("GET_USER_DETAILS API ERROR............", error)
        toast.error("Could Not Get User Details")
      }
      toast.dismiss(toastId)
      dispatch(setLoading(false))
    }
  }

export function login(email, password, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        try {
            const response = await apiConnector("POST", LOGIN_API, {
                email,
                password,
            })

            console.log("Login API response.....", response)

            // https//api.dicebear.com/5.x/initials/svg?seed=NikhilBhai
            // https://api.dicebear.com/5.x/initials/svg?seed=Nikhil Harshe

            toast.success("Login Successful")
            dispatch(setToken(response.data.token))
            const userImage = response.data?.user?.image
                ? response.data.user.image
                : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
            dispatch(setUser({ ...response.data.user, image: userImage }))
            localStorage.setItem("token", JSON.stringify(response.data.token))
            localStorage.setItem("user", JSON.stringify(response.data.user))
            navigate("/")
        } catch (error) {
            console.log("LOGIN API ERROR............", error)
            toast.error("Login Failed")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export function deleteUser(email, password) {
    return async () => {
        try {
            const response = await apiConnector("DELETE", DELETEUSER_API, {
                email,
                password
            })
            console.log("Delete API response.....", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }
        }
        catch (error) {
            console.log("Delete API Error...", error)
        }
    }
}

export function logout(navigate) {
    return (dispatch) => {
      dispatch(setToken(null))
      dispatch(setUser(null))
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logged Out")
      navigate("/")
    }
  }