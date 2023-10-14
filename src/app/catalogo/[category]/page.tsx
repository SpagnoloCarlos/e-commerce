import CatalogoList from "@/components/Organisms/Catalogo/Catalogo";
import CatalogoSidebar from "@/components/molecules/CatalogoSidebar/CatalogoSidebar";
import {
  getCategories,
  getProducts,
  getProductsByCategory,
} from "@/services/app.services";

const getCategoryProducts = async (category: string) => {
  if (category === "buscados") {
    const response = await getProducts();
    const { data } = response;
    const products = data
      ?.filter(
        ({ category }) =>
          category === "men's clothing" || category === "women's clothing"
      )
      ?.sort((a, b) => b.rating.rate - a.rating.rate);
    return products;
  }
  if (category === "destacados") {
    const response = await getProducts();
    const { data } = response;
    const products = data
      ?.sort((a, b) => b.rating.rate - a.rating.rate)
      ?.slice(0, 8);
    return products;
  }
  const response = await getProductsByCategory(category);
  const { data } = response;
  return data;
};

const getCategoriesData = async () => {
  const response = await getCategories();
  const { data } = response;
  const title = data?.map((item) => {
    const firstLetter = item.charAt(0).toUpperCase();
    const rest = item.slice(1);
    return firstLetter + rest;
  });
  return title;
};

export default async function Catalogo({ params, searchParams }) {
  const { category } = params;
  const cat = {
    electronics: "electronics",
    jewelery: "jewelery",
    "mens-clothing": "men's clothing",
    "womens-clothing": "women's clothing",
    buscados: "buscados",
    destacados: "destacados",
  };
  const products = await getCategoryProducts(cat[category]);
  const categories = await getCategoriesData();
  const { orden } = searchParams;
  const orderedProducts = orden
    ? orden === "menor_precio"
      ? products?.sort((a, b) => a.price - b.price)
      : products?.sort((a, b) => b.price - a.price)
    : products;

  return (
    <main className="flex flex-col items-center justify-between px-4 max-w-6xl mx-auto min-h-[73vh]">
      <section className="flex items-start gap-4 my-8 flex-col sm:flex-row w-full">
        <CatalogoSidebar categories={categories} />
        <CatalogoList products={orderedProducts} />
      </section>
    </main>
  );
}
