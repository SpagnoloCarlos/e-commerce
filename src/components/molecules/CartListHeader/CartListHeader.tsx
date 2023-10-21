import Link from "next/link";
import CartHeaderItem from "../CartHeaderItem/CartHeaderItem";
import { useCart } from "@/store/cart.store";

const CartListHeader = ({ open, setOpen }) => {
  const { cart } = useCart();

  return (
    <div
      className={`fixed top-0 left-0 z-10 bg-black/30 w-full h-full transition-all duration-300 ${
        open ? "visible opacity-1" : "invisible opacity-0"
      }`}
    >
      <div
        className={`absolute flex flex-col justify-between p-8 bg-white right-0 w-full md:max-w-md h-full transition-all duration-300 translate-x-[${
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
        {cart?.products?.length > 0 ? (
          <ul className="my-4">
            {cart?.products?.map(({ id, title, image, price, quantity }) => (
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
        ) : (
          <li className="text-center flex flex-col items-center gap-1 my-9">
            <h2 className="text-black text-lg font-semibold">
              Aún no tienes productos en tu carrito
            </h2>
            <p className="text-gray-700">
              Puedes explorar nuestro amplio catálogo
            </p>
            <Link
              href={"/catalog"}
              className="w-max mt-2 p-2 flex-1 rounded-md bg-blue-500 text-center transition-colors duration-200 hover:bg-blue-700"
            >
              Descubrir productos
            </Link>
          </li>
        )}
        <footer className="">
          <p className="text-black text-2xl font-semibold mb-4 flex items-center justify-between">
            Subtotal: <span>${cart.subtotal}</span>
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
