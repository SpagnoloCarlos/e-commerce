import CategoryCard from "@/components/molecules/CategoryCard/CategoryCard";
import { getCategories } from "@/services/app.services";

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

const Categories = async ({ title }) => {
  const categories = await getCategoriesData();
  return (
    <section className="flex flex-col gap-4 w-full py-8">
      <h2 className="text-black opacity-90 text-2xl">{title}</h2>
      {categories?.length > 0 && (
        <ul className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((title) => (
            <CategoryCard key={`category_${title}`} title={title} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Categories;
