import { getItemById } from "../productsById.service";

describe("getItemById", () => {
  it("should return a valid ItemDetailResponse object when given a valid id", async () => {
    const validId = "validId";
    const expectedResponse = {
      author: {
        name: "Miguel",
        lastname: "Gomez",
      },
      item: {
        id: "validId",
        title: "validTitle",
        price: {
          currency: "validCurrency",
          amount: 10,
          decimals: 0,
        },
        picture: "validPictureUrl",
        condition: "validCondition",
        free_shipping: true,
        sold_quantity: 100,
        category_id: "validCategoryId",
        description: "validDescription",
      },
    };

    const mockFetch = jest.fn();
    global.fetch = mockFetch;

    mockFetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({
        id: "validId",
        title: "validTitle",
        currency_id: "validCurrency",
        price: 10,
        pictures: [{ url: "validPictureUrl" }],
        condition: "validCondition",
        shipping: { free_shipping: true },
        sold_quantity: 100,
        category_id: "validCategoryId",
      }),
    });
    mockFetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({
        plain_text: "validDescription",
      }),
    });

    const result = await getItemById(validId);

    expect(result).toEqual(expectedResponse);
    expect(mockFetch).toHaveBeenCalledTimes(2);
    expect(mockFetch).toHaveBeenCalledWith(
      "https://api.mercadolibre.com/items/validId"
    );
    expect(mockFetch).toHaveBeenCalledWith(
      "https://api.mercadolibre.com/items/validId/description"
    );
  });
});
