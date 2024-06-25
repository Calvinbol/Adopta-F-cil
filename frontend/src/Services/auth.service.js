import { api } from "./config";

export async function signup(
  email,
  fullname,
  password,
  address,
  phone,
  website,
  community,
  description
) {
  try {
    const response = await api.post("/auth/signup", {
      email: email,
      name: fullname,
      password: password,
      phone: phone,
      address: address,
      website: website,
      autonomous_community: community,
      description: description
    });
    return response;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

export async function login(email, password) {
    try {
        const { data } = await api.post('/auth/login', {
            email: email,
            password: password
        })
        return data
    } catch (error) {
        console.log(error.response)
        throw new Error('User or password is incorrect')
    }
}