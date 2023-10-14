import axios from "axios";

const createInstance = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    timeout: 30000,
    headers: {
      Accept: "*/*",
    },
  });
  return instance;
};

export const AxiosInstance = async (data: any) => {
  return createInstance()(data);
};
