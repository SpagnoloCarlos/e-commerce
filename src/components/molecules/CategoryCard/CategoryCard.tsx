import { friendlyUrl } from "@/utils/urlHelper";
import Link from "next/link";

const CategoryCard = ({ title }) => {
  return (
    <li className="w-full flex items-stretch justify-center border-[1px] border-gray-300 bg-white h-[150px] transition-all duration-200 hover:bg-[--tertiary] [&>a]:hover:text-white">
      <Link
        className="text-[--tertiary] text-lg font-semibold transition-all duration-200 flex items-center justify-center"
        href={`/catalogo/${friendlyUrl(title)}`}
      >
        {title}
      </Link>
    </li>
  );
};

export default CategoryCard;
