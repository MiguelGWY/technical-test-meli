import { getAuthor, getCategoryNames, getItems } from "../utils/utils";

export const getProducts = async (searchParam: string) => {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${searchParam}`
    );
    const result = await response.json();
    const products = result?.results.slice(0, 4);
    console.log("en la peticion,", products);

    return {
      author: getAuthor(),
      categories: getCategoryNames(result.filters),
      items: getItems(products),
    };
  } catch (error) {}
};
