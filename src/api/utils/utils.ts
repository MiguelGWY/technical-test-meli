export const getAuthor = (): Author => {
  return {
    name: "Miguel",
    lastname: "Gomez",
  };
};

export const getCategoryNames = (filters: CategoryFilter[]): string[] => {
  const categoryNames: string[] = [];

  filters.forEach((filter) => {
    if (filter.id === "category") {
      filter.values.forEach((value) => {
        const pathFromRoot = value.path_from_root;
        if (pathFromRoot && pathFromRoot.length > 0) {
          pathFromRoot.forEach((category) => {
            categoryNames.push(category.name);
          });
        }
      });
    }
  });

  return categoryNames;
};

export const getItems = (products: ItemResponse[]): Item[] => {
  console.log("En el metodo getItem", products);
  return products.map((itemData) => ({
    id: itemData.id,
    title: itemData.title,
    price: {
      currency: itemData.currency_id,
      amount: itemData.price,
      decimals: 0,
    },
    picture: itemData.thumbnail,
    condition: itemData.condition,
    free_shipping: itemData.shipping.free_shipping,
    sold_quantity: itemData.sold_quantity,
  }));
};
