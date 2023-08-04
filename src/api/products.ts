import { axi } from "./useAxios";

export const get_products = async ({ pageParams = 1 }) => {
  const response = await axi.get(`/products/?page=${pageParams}&pages=5`)
  return response.data
}