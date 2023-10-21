import { friendlyUrl } from "@/utils/urlHelper";
import Image from "next/image";
import Link from "next/link";

const CartHeaderItem = ({
  id,
  title,
  image,
  price,
  quantity,
  cart = false,
}) => {
  return (
    <li
      className={`flex items-stretch gap-4 p-4 ${
        cart ? "rounded-lg border-gray-300 border-[1px]" : ""
      }`}
    >
      <div className="flex items-center justify-center">
        <Image src={image} alt={title} width={80} height={80} />
      </div>
      <div className="text-black w-full">
        <Link
          className="text-sm hover:underline"
          href={`/producto/${id}/${friendlyUrl(title)}`}
        >
          {title}
        </Link>
        <div className="flex items-center justify-between text-gray-600 mt-4">
          <p className="text-xl">${price} c/u</p>
          <span className="text-sm">Cantidad: {quantity}</span>
        </div>
      </div>
    </li>
  );
};

export default CartHeaderItem;
