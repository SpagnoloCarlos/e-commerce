"use client";

import Image from "next/image";
import { useState } from "react";
import icon from "../../../../public/icons/header_user.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCookie } from "@/utils/cookiesHelper";
import { useCart } from "@/store/cart.store";

const UserHeader = ({ logged }) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const { resetCart } = useCart();

  const logout = () => {
    setCookie({ name: "user_data", data: "", remove: true });
    resetCart();
    router.refresh();
    router.push("/");
  };

  const handleOnEnter = () => {
    setCollapsed(true);
  };

  const handleOnLeave = () => {
    setCollapsed(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleOnEnter}
      onMouseLeave={handleOnLeave}
    >
      <Image
        className="cursor-pointer mt-2"
        src={icon}
        alt="Usuario"
        width={33}
        height={33}
      />
      {collapsed && (
        <div
          className={`absolute top-full drop-shadow-lg left-[50%] bg-white transition-all duration-200 translate-x-[-50%] p-2 rounded-md ${
            collapsed ? "opacity-1" : "opacity-0"
          } `}
        >
          {logged ? (
            <p className="text-black w-max cursor-pointer" onClick={logout}>
              Cerrar sesión
            </p>
          ) : (
            <Link href={"/login"} className="text-black w-max block">
              Iniciar sesión
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default UserHeader;
