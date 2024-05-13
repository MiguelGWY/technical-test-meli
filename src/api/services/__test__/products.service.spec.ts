import { getProducts } from "../products.service";

const mockData = {
  filters: [
    {
      id: "category",
      values: [
        {
          path_from_root: [{ name: "Category 1" }, { name: "Category 2" }],
        },
      ],
    },
  ],
  results: [
    {
      id: "1",
      title: "Item 1",
      currency_id: "USD",
      price: 10,
      thumbnail: "thumbnail1.jpg",
      condition: "new",
      shipping: {
        free_shipping: true,
      },
      sold_quantity: 5,
    },
    {
      id: "2",
      title: "Item 2",
      currency_id: "USD",
      price: 20,
      thumbnail: "thumbnail2.jpg",
      condition: "used",
      shipping: {
        free_shipping: false,
      },
      sold_quantity: 10,
    },
  ],
};

const mockJsonPromise = Promise.resolve(mockData);
const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise,
});
global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

describe("getProducts", () => {
  it("should return an object with author, categories and items properties when result is defined", async () => {
    const searchParam = "test";
    const result = await getProducts(searchParam);
    expect(result).toEqual({
      author: {
        name: "Miguel",
        lastname: "Gomez",
      },
      categories: ["Category 1", "Category 2"],
      items: [
        {
          id: "1",
          title: "Item 1",
          price: {
            currency: "USD",
            amount: 10,
            decimals: 0,
          },
          picture: "thumbnail1.jpg",
          condition: "new",
          free_shipping: true,
          sold_quantity: 5,
        },
        {
          id: "2",
          title: "Item 2",
          price: {
            currency: "USD",
            amount: 20,
            decimals: 0,
          },
          picture: "thumbnail2.jpg",
          condition: "used",
          free_shipping: false,
          sold_quantity: 10,
        },
      ],
    });
  });
});
