import ProductsBand from "@/components/Organisms/ProductsBand/ProductsBand";
import Breadcrumbs from "@/components/atoms/Breadcrumbs/Breadcrumbs";
import Rating from "@/components/atoms/Rating/Rating";
import { getProductById } from "@/services/app.services";
import { friendlyUrl } from "@/utils/urlHelper";
import Image from "next/image";
import Link from "next/link";

const getProductData = async (id) => {
  const response = await getProductById(id);
  const { data } = response;
  return data;
};

export default async function Product({ params }) {
  const { id } = params;
  const product = await getProductData(id);
  const firstLetter = product?.category?.charAt(0)?.toUpperCase();
  const rest = product?.category?.slice(1);
  const category = firstLetter + rest;

  return (
    <main className="min-h-screen flex flex-col items-center justify-between px-4 max-w-6xl mx-auto">
      <Breadcrumbs category={category} title={product?.title} />
      <section className="w-full flex flex-col items-stretch gap-8 mb-4 bg-white rounded-lg border-[1px] border-gray-300 md:flex-row">
        <div className="max-w-full w-full md:max-w-[500px] flex items-center p-4 justify-center aspect-square max-h-[500px] lg:flex-shrink-0 md:min-w-[400px]">
          <Image
            src={product?.image}
            alt={product?.title}
            width={500}
            height={500}
            className="h-full flex-shrink-0 flex-grow-0 object-contain"
            priority
          />
        </div>
        <div className="flex flex-col justify-between p-4 max-w-[968px]">
          <div>
            <div>
              <h1 className="text-2xl text-black font-semibold ">
                {product?.title}
              </h1>
              <Link
                href={`/catalogo/${friendlyUrl(product?.category)}`}
                className="px-2 py-[2px] rounded-sm bg-[--quaternary] text-[12px] text-black w-max"
              >
                {category}
              </Link>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm text-black opacity-90 mt-1">
                  {product?.rating.rate}
                </span>
                <Rating rating={Math.round(product?.rating?.rate)} />
                <span className="text-sm text-black opacity-90 mt-1">
                  ({product?.rating.count})
                </span>
              </div>
            </div>
            <div className="text-gray-900 opacity-90 flex items-center gap-4 mt-4">
              <span className="text-3xl">${product?.price}</span>
              <p>3x ${(product?.price / 3).toFixed(2)}</p>
            </div>
            <p className="text-lg text-green-500">Envío gratis</p>
            <div className="flex flex-col gap-2 text-black mt-4">
              <h3 className="text-xl font-semibold">Descripción</h3>
              <p className="text-sm">{product?.description}</p>
            </div>
          </div>
          <button className="px-8 py-2 bg-[--secondary] font-bold mt-4 text-md rounded-md transition-all duration-200 hover:bg-[--primary]">
            Agregar al carrito
          </button>
        </div>
      </section>
      <ProductsBand title="Productos similares" category={product?.category} />
    </main>
  );
}
