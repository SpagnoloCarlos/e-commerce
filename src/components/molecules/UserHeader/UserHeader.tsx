"use client";

import Image from "next/image";
import { useState } from "react";
import icon from "../../../../public/icons/header_user.svg";
import Link from "next/link";
import { setCookieToken } from "@/utils/cookiesHelper";
import { useRouter } from "next/navigation";

const UserHeader = ({ logged }) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const logout = () => {
    setCookieToken("");
    router.refresh();
  };

  return (
    <div className="relative">
      <Image
        className="cursor-pointer mt-2"
        src={icon}
        alt="Usuario"
        width={33}
        height={33}
        onClick={() => setCollapsed(!collapsed)}
      />
      {collapsed && (
        <div
          className={`absolute top-full drop-shadow-lg left-[50%] bg-white transition-all duration-200 translate-x-[-50%] p-2 rounded-md ${
            collapsed ? "opacity-1" : "opacity-0"
          } `}
        >
          {logged ? (
            <p
              className="text-black w-max cursor-pointer"
              onClick={() => {
                logout();
                setCollapsed(false);
              }}
            >
              Cerrar sesión
            </p>
          ) : (
            <Link
              href={"/login"}
              className="text-black w-max block"
              onClick={() => setCollapsed(false)}
            >
              Iniciar sesión
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default UserHeader;
