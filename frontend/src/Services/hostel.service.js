import { api } from "./config"


export async function getMyProfileContext() {
    try {

        console.log(localStorage.getItem("token"));
        const { data } = await api.get('/hostel/myprofile', {
            headers: {
                Authorization: localStorage.getItem('token'),
            },
        })
        return data
    } catch (error) {
        /* throw new Error(error) */
        console.error(error.message)
    }
}