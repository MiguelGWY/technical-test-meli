import { getCategoriesById } from "../categoriesById.service";

const mockResponse = {
  path_from_root: [{ name: "zapatos" }, { name: "calzado" }],
};
const mockJsonPromise = Promise.resolve(mockResponse);
const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise,
});
global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

describe("getCategoriesById", () => {
  it('should return an object with a "categories" property when the API returns a valid response', async () => {
    const id = "123";

    const result = await getCategoriesById(id);

    expect(result).toHaveProperty("categories");
  });

  it('should return an object with a "categories" property when the API returns an empty response', async () => {
    const id = "";

    const result = await getCategoriesById(id);

    expect(result).toHaveProperty("categories");
  });

  
  it('should return object with "categories" when the parameter ID is Undefined', async () => {
    const id = undefined;

    const result = await getCategoriesById(id);

    expect(result).toHaveProperty("categories");
  });
});
