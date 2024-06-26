import { api} from "./config";


export async function getPetAdoption(id){
    try {
        const { data } = await api.get(`/adoption/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }); 
        return data
    } catch (error) {
        console.error(error.message)
    }
}