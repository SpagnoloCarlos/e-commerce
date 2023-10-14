"use client";
import ProductCard from "@/components/molecules/ProductCard/ProductCard";

const CatalogoList = ({ products }) => {
  return (
    <div className="w-full">
      {products?.length > 0 && (
        <ul className="w-full grid gap-2 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map(
            ({ id, title, price, image, category, rating }, index) => (
              <ProductCard
                key={`catalogo_product_${id}`}
                id={id}
                title={title}
                price={price}
                image={image}
                category={category}
                rating={rating}
                priority={index === 0}
              />
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default CatalogoList;
