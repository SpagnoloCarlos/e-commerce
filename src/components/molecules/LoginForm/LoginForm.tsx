"use client";

import { login } from "@/services/app.services";
import Image from "next/image";
import { useState } from "react";
import pass from "../../../../public/icons/pass_icon.svg";
import passShow from "../../../../public/icons/pass_icon_show.svg";
import { setCookie } from "@/utils/cookiesHelper";
import { useRouter } from "next/navigation";

const LoginForm = ({ user }) => {
  const [username, setUsername] = useState(user?.username);
  const [password, setPassword] = useState(user?.password);
  const [show, setShow] = useState(false);
  const router = useRouter();

  const onChange = (e) => {
    e.preventDefault();
    const input = e.currentTarget.id;
    const value = e.currentTarget.value;
    if (input === "user") {
      setUsername(value);
    }
    if (input === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await login({ username, password });
    const { data } = response;
    if (data) {
      setCookie({ name: "user_data", data: user });
      router.push("/");
      router.refresh();
    }
  };

  return (
    <form
      className="flex flex-col items-center mt-8 w-full px-4 gap-4 text-gray-600"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col w-full">
        <label htmlFor="user">Usuario</label>
        <input
          className="py-1 px-3 h-9 border-[1px] border-[--tertiary] rounded-md text-black opacity-90 focus:outline-[--tertiary]"
          type="text"
          id="user"
          value={username}
          onChange={onChange}
          required
          autoComplete="off"
        />
      </div>
      <div className="flex flex-col w-full relative">
        <label htmlFor="password">Contraseña</label>
        <input
          className="py-1 px-3 h-9 border-[1px] border-[--tertiary] rounded-md text-black opacity-90 focus:outline-[--tertiary]"
          type={show ? "text" : "password"}
          id="password"
          value={password}
          onChange={onChange}
          required
          autoComplete="off"
        />
        <Image
          className="absolute bottom-1 right-4 cursor-pointer"
          src={show ? passShow : pass}
          alt={show ? "Ocultar contraseña" : "Mostrar contraseña"}
          width={28}
          height={28}
          onClick={() => setShow(!show)}
        />
      </div>
      <button
        className="px-8 py-2 bg-[--secondary] font-bold mt-4 text-md rounded-md transition-all duration-200 hover:bg-[--primary] text-white w-max"
        type="submit"
      >
        Iniciar sesión
      </button>
    </form>
  );
};

export default LoginForm;
