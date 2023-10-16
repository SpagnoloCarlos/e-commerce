import { Lilita_One } from "next/font/google";
import Link from "next/link";
import { cookies } from "next/headers";
import UserHeader from "@/components/molecules/UserHeader/UserHeader";
import CartHeader from "@/components/molecules/CartHeader/CartHeader";
import { getCartByUser } from "@/services/app.services";

const lilita = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

const getCartData = async (id) => {
  const response = await getCartByUser(id);
  const {
    data: { products },
  } = response;
  return products;
};

const Header = async () => {
  const cookiesStore = cookies();
  const auth = cookiesStore.get("user_data");
  let userData = "";
  let cart = [];
  if (auth?.value) {
    const jsonString = atob(auth?.value);
    userData = JSON.parse(jsonString);
    cart = await getCartData(userData?.["id"]);
  }

  return (
    <header className="bg-[--secondary]">
      <div className="flex items-center justify-between p-4 max-w-6xl mx-auto">
        <Link href={"/"} className={`${lilita.className} text-3xl`}>
          Spagnolo <span className="text-[--quinary]">Shop</span>
        </Link>
        <nav className="flex items-center gap-8">
          <UserHeader logged={userData} />
          <CartHeader user={userData} cartList={cart} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
