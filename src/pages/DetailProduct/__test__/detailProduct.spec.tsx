import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DetailProduct } from "../DetailProduct";
import { MemoryRouter } from "react-router-dom";

describe("DetailProduct", () => {
  it("should render DetailProduct", () => {
    const { container } = render(
      <MemoryRouter>
        <DetailProduct />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
