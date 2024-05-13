export const getCategoriesById = async (id: string = "") => {
  const productCategory = await fetch(
    `https://api.mercadolibre.com/categories/${id}`
  );

  const productCategoryData = await productCategory.json();
  const categories = productCategoryData?.path_from_root.map(
    (category: Category) => category.name
  );

  return {
    categories,
  };
};
