const BASE_URL = process.env.REACT_APP_BASE_URL

//AUTH ENDPOINTS
export const endpoints = {
    CREATEUSER_API : BASE_URL + "/api/v1/auth/signup",
    LOGIN_API : BASE_URL + "/api/v1/auth/login",
    DELETEUSER_API : BASE_URL + "/api/v1/auth/deleteUser",
    GET_USER_DETAILS_API : BASE_URL + "/api/v1/auth/getUserDetails"
}

//EVENT ENDPOINTS
export const eventEndpoints = {
    CREATEEVENT_API : BASE_URL + "/api/v1/createEvent",
    EDITEVENT_API : BASE_URL + "/api/v1/editEvent",
    GET_ALL_EVENTS_API : BASE_URL + "/api/v1/getAllEventes",
    GET_EVENT_DETAILS_API : BASE_URL + "/api/v1/getEventDetails",
    DELETE_EVENT_API : BASE_URL + "/api/v1/deleteEvent",
}

//MEMBERS ENDPOINTS
export const memberEndpoints = {
    CREATEMEMBER_API : BASE_URL + "/api/v1/create_member",
    GET_MEMBER_DETAILS : BASE_URL + "/api/v1/get_member_details",
    GET_ALL_MEMBERS_DETAILS : BASE_URL + "/api/v1/getAllMembersDetails",
    DELETE_MEMBER_API : BASE_URL + "/api/v1/deleteMember",
}