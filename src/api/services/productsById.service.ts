export const getItemById = async (id: string): Promise<ItemDetailResponse> => {
  const product = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const productDescription = await fetch(
    `https://api.mercadolibre.com/items/${id}/description`
  );

  const productData = await product.json();
  const descriptionData = await productDescription.json();

  const author: Author = {
    name: "Miguel",
    lastname: "Gomez",
  };

  const item: Item = {
    id: productData.id,
    title: productData.title,
    price: {
      currency: productData.currency_id,
      amount: productData.price,
      decimals: 0,
    },
    picture: productData.pictures.length > 0 ? productData.pictures[0].url : "",
    condition: productData.condition,
    free_shipping: productData.shipping.free_shipping,
    sold_quantity: productData.sold_quantity,
    category_id: productData.category_id,
    description: descriptionData.plain_text,
  };

  return {
    author,
    item,
  };
};
