import { AxiosInstance } from "./axios.config";

export const getProducts = async (limit?: number) => {
  try {
    const response = await AxiosInstance({
      method: "GET",
      url: `/products${limit ? `?limit=${limit}` : ""}`,
    });
    return response;
  } catch (err) {
    console.log(`Error in getProducts: ${err}`);
  }
};

export const getProductById = async (id?: number) => {
  try {
    const response = await AxiosInstance({
      method: "GET",
      url: `/products/${id}`,
    });
    return response;
  } catch (err) {
    console.log(`Error in getProductById: ${err}`);
  }
};

export const getProductsByCategory = async (
  category: string,
  limit?: number
) => {
  try {
    const response = await AxiosInstance({
      method: "GET",
      url: `/products/category/${category}${limit ? `?limit=${limit}` : ""}`,
    });
    return response;
  } catch (err) {
    console.log(`Error in getProductsByCategory: ${err}`);
  }
};

export const getCategories = async () => {
  try {
    const response = await AxiosInstance({
      method: "GET",
      url: `/products/categories`,
    });
    return response;
  } catch (err) {
    console.log(`Error in getCategories: ${err}`);
  }
};
