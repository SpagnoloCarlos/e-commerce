import Link from "next/link";
import { IProductsBand } from "./types";
import { getProducts, getProductsByCategory } from "@/services/app.services";
import ProductCard from "@/components/molecules/ProductCard/ProductCard";
import { friendlyUrl } from "@/utils/urlHelper";

const getAllProducts = async () => {
  const response = await getProducts();
  const { data } = response;
  const highlights = data
    ?.sort((a, b) => b.rating.rate - a.rating.rate)
    ?.slice(0, 5);
  return highlights;
};

const getCategoryProducts = async (category: string) => {
  if (category === "buscados") {
    const response = await getProducts();
    const { data } = response;
    const products = data
      ?.filter(
        ({ category }) =>
          category === "men's clothing" || category === "women's clothing"
      )
      ?.sort((a, b) => b.rating.rate - a.rating.rate)
      ?.slice(0, 5);
    return products;
  } else {
    const response = await getProductsByCategory(category, 5);
    const { data } = response;
    return data;
  }
};

const ProductsBand = async ({ title, category }: IProductsBand) => {
  const products = category
    ? await getCategoryProducts(category)
    : await getAllProducts();

  return (
    <section className="flex flex-col gap-4 w-full py-8">
      <div className="flex items-center gap-4">
        <h2 className="text-black opacity-90 text-2xl">{title}</h2>
        <Link
          href={`/catalogo/${category ? friendlyUrl(category) : ""}`}
          className="text-sm text-blue-400 mt-1"
        >
          Ver todos los productos
        </Link>
      </div>
      {products?.length > 0 && (
        <ul className="grid gap-2 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map(({ id, title, price, image, category, rating }) => (
            <ProductCard
              key={`product_${id}`}
              id={id}
              title={title}
              price={price}
              image={image}
              category={category}
              rating={rating}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default ProductsBand;
