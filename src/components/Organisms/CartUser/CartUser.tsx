"use client";
import CartHeaderItem from "@/components/molecules/CartHeaderItem/CartHeaderItem";
import { useCart } from "@/store/cart.store";
import ProductsBand from "../ProductsBand/ProductsBand";
import Link from "next/link";

const CartUser = () => {
  const { cart } = useCart();

  return (
    <main className="min-h-screen flex flex-col px-4 max-w-6xl mx-auto">
      <section className="flex flex-col md:flex-row items-start gap-8">
        <article className="w-full flex flex-col p-4 mt-8 items-stretch gap-8 bg-white rounded-lg border-[1px] border-gray-300">
          <h2 className="text-black text-2xl font-semibold p-4 border-gray-300 border-b-[1px]">
            Tu Carrito:
          </h2>
          <ul className="flex flex-col gap-4">
            {cart.products.length > 0 ? (
              cart.products.map(({ id, title, price, quantity, image }) => (
                <CartHeaderItem
                  key={`cart_product_${id}`}
                  id={id}
                  title={title}
                  price={price}
                  quantity={quantity}
                  image={image}
                  cart
                />
              ))
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
                  className="w-max mt-2 p-2 flex-1 rounded-md bg-[--secondary] text-center transition-colors duration-200 hover:bg-[--primary]"
                >
                  Descubrir productos
                </Link>
              </li>
            )}
          </ul>
        </article>
        <aside className="w-full md:max-w-[400px] p-4 flex flex-col md:mt-8 mb-8 md:mb-0 items-stretch gap-8 bg-white rounded-lg border-[1px] border-gray-300">
          <h3 className="text-black text-2xl p-4 font-semibold border-gray-300 border-b-[1px]">
            Resumen
          </h3>
          <ul className="text-gray-700 p-4">
            <li className="flex items-center justify-between mb-1">
              Subtotal: <span>${cart.subtotal}</span>
            </li>
            <li className="flex items-center justify-between mb-1">
              Descuentos: <span>${cart.descuento}</span>
            </li>
            <li className="flex items-center justify-between text-black font-semibold text-xl">
              Total: <span>${cart.total}</span>
            </li>
          </ul>
        </aside>
      </section>
      <ProductsBand
        title="Productos que te pueden interesar"
        category="destacados"
      />
    </main>
  );
};

export default CartUser;
