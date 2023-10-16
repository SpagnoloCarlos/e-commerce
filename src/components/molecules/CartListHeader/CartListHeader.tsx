import Link from "next/link";
import { useEffect, useState } from "react";
import CartHeaderItem from "../CartHeaderItem/CartHeaderItem";
import { useCart } from "@/store/cart.store";

const CartListHeader = ({ open, setOpen }) => {
  const [subTotal, setSubtotal] = useState(0);
  const { cart } = useCart();

  useEffect(() => {
    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    setSubtotal(subtotal);
  }, [cart]);

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
        {cart?.length > 0 && (
          <ul className="my-4">
            {cart.map(({ id, title, image, price, quantity }) => (
              <CartHeaderItem
                key={`cart_product_${id}`}
                id={id}
                title={title}
                price={price}
                image={image}
                quantity={quantity}
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
