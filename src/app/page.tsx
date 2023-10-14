import Categories from "@/components/Organisms/Categories/Categories";
import ProductsBand from "@/components/Organisms/ProductsBand/ProductsBand";
import Slider from "@/components/Organisms/Slider/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <main className="flex flex-col items-center justify-between px-4 max-w-6xl mx-auto">
        <ProductsBand title="Productos destacados" category="destacados" />
        <ProductsBand title="Lo más buscado" category="buscados" />
        <ProductsBand title="Productos electrónicos" category="electronics" />
        <ProductsBand title="Productos de joyería" category="jewelery" />
        <Categories title={"Categorías destacadas"} />
      </main>
    </>
  );
}
