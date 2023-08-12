/* eslint-disable @typescript-eslint/no-explicit-any */
import { axi, authAxios } from "./useAxios";
import { Product } from "../Interfaces";

export const get_products = async ({ pageParams = 1 }) => {
  const response = await axi.get(`/products/?page=${pageParams}&pages=5`)
  return response.data
}

export const post_product = async (data: Product) => {
  const formData = new FormData();
  formData.append("name", data.name)
  formData.append("descrption", data.description)
  formData.append("count_in_stock", data.count_in_stock.toString())
  formData.append("category", data.category)
  formData.append("price", data.price.toString())
  if (data.image) {
    formData.append("image", data.image)
  }
  const response = await authAxios.post("/product/", formData)
  return response.data
}


export const get_product = async (id: number) => {
  const response = await axi.get(`/get/${id}/`)
  return response.data
}


export const edit_product = async (data: Product) => {
  const formData = new FormData();
  formData.append("name", data.name)
  formData.append("descrption", data.description)
  formData.append("count_in_stock", data.count_in_stock.toString())
  formData.append("category", data.category)
  formData.append("price", data.price.toString())
  if (data.image) {
    formData.append("image", data.image)
  }
  const response = await authAxios.patch(`/product/${data.id}/`, formData)
  return response.data
}

export const delete_product = async (id: number) => {
  await authAxios.delete(`/product/${id}/`)
}