import CartUser from "@/components/Organisms/CartUser/CartUser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carrito | Spagnolo Shop",
};

const CartPage = () => {
  return <CartUser />;
};

export default CartPage;
