import Image from "next/image";
import { IProductCard } from "./types";
import Link from "next/link";
import { friendlyUrl } from "@/utils/urlHelper";

const ProductCard = ({
  id,
  title,
  image,
  price,
  rating,
  category,
}: IProductCard) => {
  return (
    <li className="flex flex-col w-[215px] bg-white rounded-sm transition-all duration-200 hover:drop-shadow-md">
      <div className="w-full flex items-center justify-center p-4 rounded-sm aspect-square max-h-[215px]">
        <Image
          className="h-full flex-shrink-0 flex-grow-0 object-contain"
          src={image}
          alt={title}
          width={183}
          height={183}
        />
      </div>
      <div className="flex flex-col p-4 pt-0">
        <Link
          href={`/catalogo/${category}`}
          className="px-1 rounded-sm bg-[--quaternary] text-[12px] text-black w-max"
        >
          {category}
        </Link>
        <Link
          className="text-black opacity-90 mt-3 text-sm product-title"
          href={`/producto/${id}/${friendlyUrl(title)}`}
        >
          {title}
        </Link>
        <div className="flex flex-col mt-3 text-black">
          <p className="text-lg">
            ${price} -{" "}
            <span className="text-sm">3x ${(price / 3).toFixed(2)}</span>
          </p>
          <p className="text-md text-green-500 mt-2">Envío gratis</p>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
