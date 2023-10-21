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

interface IDetails {
  products: Array<IProduct>;
  subtotal: number;
  descuento: 0;
  total: number;
}

interface ICart {
  cart: IDetails;
  getCart: (id: number) => void;
  resetCart: () => void;
}

export const useCart = create<ICart>()((set) => ({
  cart: { products: [], descuento: 0, subtotal: 0, total: 0 },

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
          const total = cart.reduce(
            (acc, curr) => acc + curr.price * curr.quantity,
            0
          );
          set(() => ({
            cart: {
              products: cart,
              descuento: 0,
              subtotal: total,
              total,
            },
          }));
        })
        .catch((error) => {
          console.error("Error al obtener los datos de los productos:", error);
        });
    }
  },

  resetCart: () => {
    set(() => ({
      cart: {
        products: [],
        descuento: 0,
        subtotal: 0,
        total: 0,
      },
    }));
  },
}));
