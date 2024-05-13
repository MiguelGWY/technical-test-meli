import { render } from "@testing-library/react";
import { ProductCardComponent } from "../ProductCardComponent";
import "@testing-library/jest-dom";

describe("ProductCardComponent", () => {
  const itemMock = {
    id: "1",
    title: "test product",
    price: {
      amount: 1234,
      decimals: 0,
      currency: "ARG",
    },
    thumbnail: "www.ddd.com",
    picture: "www.ddd.com",
    condition: "new",
    free_shipping: false,
    sold_quantity: 304,
    description: "Description Item",
    categories: [""],
    category_id: "112DADSAD",
    currency_id: "SDDDWEEEF",
  };

  it("should render ProductCardComponent", () => {
    const { container } = render(<ProductCardComponent {...itemMock} />);
    expect(container).toMatchSnapshot();
  });

  it("should render the product title, image, price, and condition", () => {
    const { getByText } = render(
      <ProductCardComponent {...itemMock} />
    );

    expect(getByText("test product")).toBeInTheDocument();
    expect(getByText("$ 1234")).toBeInTheDocument();
    expect(getByText("Nuevo")).toBeInTheDocument();
  });
});
