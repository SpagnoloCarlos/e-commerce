import Categories from "@/components/Organisms/Categories/Categories";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import ProductsBand from "@/components/Organisms/ProductsBand/ProductsBand";
import Slider from "@/components/Organisms/Slider/Slider";

export default async function Home() {
  return (
    <>
      <Header />
      <Slider />
      <main className="flex flex-col items-center justify-between px-4 max-w-6xl mx-auto">
        <ProductsBand title="Productos destacados" />
        <ProductsBand title="Lo más buscado" category="buscados" />
        <ProductsBand title="Productos electrónicos" category="electronics" />
        <ProductsBand title="Productos de joyería" category="jewelery" />
        <Categories title={"Categorías destacadas"} />
      </main>
      <Footer />
    </>
  );
}
