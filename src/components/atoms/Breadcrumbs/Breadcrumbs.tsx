import { friendlyUrl } from "@/utils/urlHelper";
import Link from "next/link";

const Breadcrumbs = ({ category, title }) => {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 w-full my-4 flex-wrap">
      <Link href={"/"}>Inicio</Link>
      <span>/</span>
      <Link href={"/catalogo"}>Catálogo</Link>
      <span>/</span>
      <Link href={`/catalogo/${friendlyUrl(category)}`}>{category}</Link>
      <span>/</span>
      <p>{title}</p>
    </div>
  );
};

export default Breadcrumbs;
