import { getCartByUser, getProductById } from "@/services/app.services";
import { create } from "zustand";

interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  quantity?: number;
}

interface ICart {
  cart: Array<IProduct>;
  getCart: (id: number) => void;
}

export const useCart = create<ICart>()((set) => ({
  cart: [],

  getCart: async (id) => {
    const response = await getCartByUser(id);
    const {
      data: { products },
    } = response;

    const getProductData = async (id) => {
      const response = await getProductById(id);
      const { data } = response;
      return data;
    };

    if (products?.length > 0) {
      const promises = products.map(({ productId }) =>
        getProductData(productId)
      );

      Promise.all(promises)
        .then((productDataArray) => {
          const cart = productDataArray?.map((item, index) => {
            return { ...item, quantity: products?.[index]?.quantity };
          });
          set(() => ({
            cart,
          }));
        })
        .catch((error) => {
          console.error("Error al obtener los datos de los productos:", error);
        });
    }
  },
}));
