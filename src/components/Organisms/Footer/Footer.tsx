import { Lilita_One } from "next/font/google";
import Link from "next/link";

const lilita = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

const Footer = async () => {
  return (
    <footer className="bg-[--secondary]">
      <div className="flex items-center p-4 max-w-6xl mx-auto">
        <Link href={"/"} className={`${lilita.className} text-3xl`}>
          Spagnolo <span className="text-[--quinary]">Shop</span>
        </Link>
        <div></div>
      </div>
      <div className="flex items-center justify-center p-4 max-w-6xl mx-auto">
        <p>© 2023 All rights reserved | Spagnolo Carlos Andrés</p>
      </div>
    </footer>
  );
};

export default Footer;
