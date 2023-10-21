import LoginForm from "@/components/molecules/LoginForm/LoginForm";
import { getUser } from "@/services/app.services";
import { Metadata } from "next";

const getUserData = async () => {
  const response = await getUser(3);
  const { data } = response;
  return data;
};

export const metadata: Metadata = {
  title: "Login | Spagnolo Shop",
};

export default async function Login() {
  const user = await getUserData();

  return (
    <main className="flex flex-col items-center justify-center px-4 max-w-6xl mx-auto min-h-[73vh]">
      <section className="w-full max-w-md flex flex-col items-center">
        <h1 className="text-3xl text-black font-semibold">Inicia sesión</h1>
        <LoginForm user={user} />
      </section>
    </main>
  );
}
