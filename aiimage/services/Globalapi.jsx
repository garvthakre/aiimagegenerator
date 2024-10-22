import axios from "axios"
const axiosClient = axios.create({
    baseURL :'http://localhost:1337/api',
    headers :
     {
     'Authorization':'Bearer'+processColor.env.EXPO_PUBLIC_STRAPI_API_KEY
     }
})

const GetUserInfo=()=> axiosClient.get('user-lists?filters[userEmail][$eq]=' +email)

export default {
    GetUserInfo
}