import { getAuthor, getCategoryNames, getItems } from "../utils";

describe("getAuthor", () => {
  it("should return an object with name and lastname properties", () => {
    const author = getAuthor();
    expect(author).toEqual({ name: "Miguel", lastname: "Gomez" });
  });

  it("should return an object", () => {
    const author = getAuthor();
    expect(typeof author).toBe("object");
  });
});

describe("getCategoryNames", () => {
  it("should return an empty array when given an empty array of CategoryFilters", () => {
    const filters: CategoryFilter[] = [];
    const result = getCategoryNames(filters);
    expect(result).toEqual([]);
  });

  it('should return an array of category names when given an array of CategoryFilters with a single filter with id "category" and values with non-empty path_from_root arrays', () => {
    const filters: CategoryFilter[] = [
      {
        id: "category",
        values: [
          {
            path_from_root: [
              { name: "Category 1" },
              { name: "Category 2" },
              { name: "Category 3" },
            ],
          },
        ],
      },
    ];
    const result = getCategoryNames(filters);
    expect(result).toEqual(["Category 1", "Category 2", "Category 3"]);
  });

  it('should return an empty array when given an array of CategoryFilters with a single filter with id "category" and values with empty path_from_root arrays', () => {
    const filters: CategoryFilter[] = [
      {
        id: "category",
        values: [
          {
            path_from_root: [],
          },
        ],
      },
    ];
    const result = getCategoryNames(filters);
    expect(result).toEqual([]);
  });

  it('should return an empty array when given an array of CategoryFilters without a filter with id "category"', () => {
    const filters: CategoryFilter[] = [
      {
        id: "other",
        values: [
          {
            path_from_root: [
              { name: "Category 1" },
              { name: "Category 2" },
              { name: "Category 3" },
            ],
          },
        ],
      },
    ];
    const result = getCategoryNames(filters);
    expect(result).toEqual([]);
  });

  it("should return an empty array when given an array of CategoryFilters without any filters", () => {
    const filters: CategoryFilter[] = [];
    const result = getCategoryNames(filters);
    expect(result).toEqual([]);
  });
});

describe("getItems", () => {
  it("should return an array of Item objects with the correct properties when passed an array of ItemResponse objects", () => {
    const products: ItemResponse[] = [
      {
        id: "1",
        title: "Item 1",
        currency_id: "USD",
        price: 10,
        thumbnail: "item1.jpg",
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
        thumbnail: "item2.jpg",
        condition: "used",
        shipping: {
          free_shipping: false,
        },
        sold_quantity: 10,
      },
    ];

    const result = getItems(products);

    expect(result).toEqual([
      {
        id: "1",
        title: "Item 1",
        price: {
          currency: "USD",
          amount: 10,
          decimals: 0,
        },
        picture: "item1.jpg",
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
        picture: "item2.jpg",
        condition: "used",
        free_shipping: false,
        sold_quantity: 10,
      },
    ]);
  });

});
