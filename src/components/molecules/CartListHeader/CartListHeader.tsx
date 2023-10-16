import { getProductById } from "@/services/app.services";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartHeaderItem from "../CartHeaderItem/CartHeaderItem";

const CartListHeader = ({ open, setOpen, cartList }) => {
  const [products, setProducts] = useState([]);
  const [subTotal, setSubtotal] = useState(0);

  useEffect(() => {
    const getProductData = async (id) => {
      const response = await getProductById(id);
      const { data } = response;
      return data;
    };
    if (cartList?.length > 0) {
      const promises = cartList.map(({ productId }) =>
        getProductData(productId)
      );

      Promise.all(promises)
        .then((productDataArray) => {
          setProducts(productDataArray);
        })
        .catch((error) => {
          console.error("Error al obtener los datos de los productos:", error);
        });
    }
  }, []);

  useEffect(() => {
    const subtotal = products.reduce((acc, item) => acc + item.price, 0);
    setSubtotal(subtotal);
  }, [products]);

  return (
    <div
      className={`fixed top-0 left-0 z-10 bg-black/30 w-full h-full transition-all duration-300 ${
        open ? "visible opacity-1" : "invisible opacity-0"
      }`}
    >
      <div
        className={`absolute flex flex-col p-8 bg-white right-0 w-full md:max-w-md h-full transition-all duration-300 translate-x-[${
          open ? "0px" : "448px"
        }]`}
      >
        <header className="flex items-center justify-between">
          <p className="text-[--secondary] font-bold text-3xl">Carrito</p>
          <span
            className="text-black font-bold text-3xl cursor-pointer"
            onClick={setOpen}
          >
            x
          </span>
        </header>
        {products?.length > 0 && (
          <ul className="my-4">
            {products.map(({ id, title, image, price }, index) => (
              <CartHeaderItem
                key={`cart_product_${id}`}
                id={id}
                title={title}
                price={price}
                image={image}
                quantity={cartList?.[index]?.quantity}
              />
            ))}
          </ul>
        )}
        <div>productos</div>
        <footer className="mt-auto">
          <p className="text-black text-2xl font-semibold mb-4 flex items-center justify-between">
            Subtotal: <span>${subTotal}</span>
          </p>
          <div className="flex items-center gap-4 justify-between text-white font-semibold ">
            <Link
              className="p-2 flex-1 rounded-md bg-[--secondary] text-center transition-colors duration-200 hover:bg-[--primary]"
              href={"/cart"}
            >
              Comprar
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CartListHeader;
