import CatalogoList from "@/components/Organisms/Catalogo/Catalogo";
import CatalogoSidebar from "@/components/molecules/CatalogoSidebar/CatalogoSidebar";
import { getCategories, getProducts } from "@/services/app.services";

const getAllProducts = async () => {
  const response = await getProducts();
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

export default async function Catalogo({ searchParams }) {
  const products = await getAllProducts();
  const categories = await getCategoriesData();
  const { orden } = searchParams;
  const orderedProducts = orden
    ? orden === "menor_precio"
      ? products?.sort((a, b) => a.price - b.price)
      : products?.sort((a, b) => b.price - a.price)
    : products;

  return (
    <main className="flex flex-col items-center justify-between px-4 max-w-6xl mx-auto">
      <section className="flex items-start gap-4 my-8 flex-col sm:flex-row w-full">
        <CatalogoSidebar categories={categories} />
        <CatalogoList products={orderedProducts} />
      </section>
    </main>
  );
}
