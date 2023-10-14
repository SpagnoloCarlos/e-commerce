"use client";
import { friendlyUrl } from "@/utils/urlHelper";
import Link from "next/link";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

const CatalogoSidebar = ({ categories }) => {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const menor = searchParams.get("menor_precio");
  const mayor = searchParams.get("mayor_precio");
  const { category } = params;

  return (
    <div className="p-4 bg-white rounded-md border-[1px] border-gray-300 w-full sm:w-[215px] flex-shrink-0">
      <div className="flex items-center justify-between gap-4">
        <p className="text-black text-lg font-semibold">Filtros</p>
        {params?.category && (
          <Link className="text-black text-[12px]" href={"/catalogo"}>
            Quitar filtros
          </Link>
        )}
      </div>
      {categories?.length > 0 && (
        <form>
          <div>
            <h4 className="text-gray-900 pb-1 border-b-[1px] border-[--tertiary] my-4">
              Categorías
            </h4>
            <ul>
              {categories.map((cat, index) => (
                <li
                  className="text-gray-600 text-sm mt-1 flex items-center gap-2 cursor-pointer"
                  key={`category_${cat}_${index}`}
                  onClick={() => router.push(`/catalogo/${friendlyUrl(cat)}`)}
                >
                  <input
                    className=" accent-[--secondary] cursor-pointer w-4 aspect-square"
                    type="radio"
                    name="category"
                    id={`category_${index}`}
                    defaultChecked={category === friendlyUrl(cat)}
                  />{" "}
                  <label
                    className="cursor-pointer"
                    htmlFor={`category_${index}`}
                  >
                    {cat}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 pb-1 border-b-[1px] border-[--tertiary] my-4">
              Etiquetas
            </h4>
            <ul>
              <li
                className="text-gray-600 text-sm flex items-center gap-2 cursor-pointer mt-1"
                onClick={() => router.push(`/catalogo/destacados`)}
              >
                <input
                  className=" accent-[--secondary] cursor-pointer w-4 aspect-square"
                  type="radio"
                  name="category"
                  id={"tag_destacados"}
                  defaultChecked={category === "destacados"}
                />{" "}
                <label className="cursor-pointer" htmlFor={"tag_destacados"}>
                  Destacados
                </label>
              </li>
              <li
                className="text-gray-600 text-sm flex items-center gap-2 cursor-pointer mt-1"
                onClick={() => router.push(`/catalogo/buscados`)}
              >
                <input
                  className=" accent-[--secondary] cursor-pointer w-4 aspect-square"
                  type="radio"
                  name="category"
                  id={"tag_buscados"}
                  defaultChecked={category === "buscados"}
                />{" "}
                <label className="cursor-pointer" htmlFor={"tag_buscados"}>
                  Buscados
                </label>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 pb-1 border-b-[1px] border-[--tertiary] my-4">
              Ordenar
            </h4>
            <ul>
              <li
                className="text-gray-600 text-sm flex items-center gap-2 cursor-pointer mt-1"
                onClick={() => router.push(`${pathname}?orden=menor_precio`)}
              >
                <input
                  className=" accent-[--secondary] cursor-pointer w-4 aspect-square"
                  type="radio"
                  name="orden"
                  id={"descendente"}
                  defaultChecked={menor !== null}
                />{" "}
                <label className="cursor-pointer" htmlFor={"descendente"}>
                  Menor precio
                </label>
              </li>
              <li
                className="text-gray-600 text-sm flex items-center gap-2 cursor-pointer mt-1"
                onClick={() => router.push(`${pathname}?orden=mayor_precio`)}
              >
                <input
                  className=" accent-[--secondary] cursor-pointer w-4 aspect-square"
                  type="radio"
                  name="orden"
                  id={"orden_ascendente"}
                  defaultChecked={mayor !== null}
                />{" "}
                <label className="cursor-pointer" htmlFor={"orden_ascendente"}>
                  Mayor precio
                </label>
              </li>
            </ul>
          </div>
        </form>
      )}
    </div>
  );
};

export default CatalogoSidebar;
