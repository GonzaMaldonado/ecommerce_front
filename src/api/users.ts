import { axi } from "./useAxios"

export const registerRequest = async (username:string, email:string, first_name:string, last_name: string, password:string, confirm_password:string) => {
  await axi.post("/users/register/", {username, email, first_name, last_name, password, confirm_password})
}

export const loginRequest = async (username:string, password:string) => {
  const response = await axi.post("/users/login/", {username, password})
  return response;
}