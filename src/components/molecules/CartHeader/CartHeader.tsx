"use client";
import Image from "next/image";
import icon from "../../../../public/icons/header_cart.svg";
import CartListHeader from "../CartListHeader/CartListHeader";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/store/cart.store";

const CartHeader = ({ user }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { getCart } = useCart();

  useEffect(() => {
    getCart(user?.id);
  }, []);

  useEffect(() => {
    setOpen(collapsed);
  }, [collapsed]);

  useEffect(() => {
    if (collapsed) {
      setOpen(false);
      setTimeout(() => {
        setCollapsed(false);
      }, 300);
    }
  }, [pathname]);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setCollapsed(false);
    }, 200);
  };

  return (
    <div>
      <Image
        src={icon}
        alt="Carrito"
        width={33}
        height={33}
        onClick={() => setCollapsed(!collapsed)}
        className=" cursor-pointer"
      />
      {collapsed && <CartListHeader open={open} setOpen={handleClose} />}
    </div>
  );
};

export default CartHeader;
