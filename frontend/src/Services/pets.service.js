import { api } from "./config";

export async function getAllMascotas(tipo) {
    try {
        const { data } = await api.get(`/pet${tipo}`);
    return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function getPetById(id) {
    try {
        const { data } = await api.get(`/pet/${ id }`);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function getPetsByHostel() {
  try {
    const { data } = await api.get(`/pet/me`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}


export async function addPet(newPetData) {
  try {
    const { data } = await api.post("/pet", newPetData, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}