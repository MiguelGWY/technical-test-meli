import { getAuthor, getCategoryNames, getItems } from "../utils/utils";

export const getProducts = async (searchParam: string) => {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${searchParam}&limit=4`
    );
    const result = await response.json();

    return {
      author: getAuthor(),
      categories: getCategoryNames(result.filters),
      items: getItems(result.results),
    };
  } catch (error) {}
};
