import { render } from "@testing-library/react";
import { DetailProductCard } from "../DetailProductCardComponent";
import "@testing-library/jest-dom";

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

describe("DetailProductCardComponent", () => {
  it("should render DetailProductCardComponent", () => {
    const { container } = render(<DetailProductCard {...itemMock} />);
    expect(container).toMatchSnapshot();
  });

  it("should display the product condition in Spanish when it is new", () => {
    const {getByText} = render(<DetailProductCard {...itemMock} />);
    expect(getByText("Nuevo | +100 vendidos")).toBeInTheDocument();
  });
});
