import { api } from "./config";

export async function getAllMascotas(tipo){
    try {
        const {data} = await api.get(`/pet${tipo}` )
        return data
    } catch (error) {
        throw new Error (error.message)
    }
}