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

  // it("should render the HeaderComponent and BreadCrumbsComponent", () => {
  //   jest.mock("../../api/services/productsById.service", () => ({
  //     getItemById: jest.fn().mockResolvedValue({
  //       author: {
  //         name: "Miguel",
  //         lastname: "Gomez",
  //       },
  //       item: {
  //         id: "123",
  //         title: "Test Product",
  //         price: {
  //           currency: "USD",
  //           amount: 100,
  //           decimals: 0,
  //         },
  //         picture: "https://example.com/image.jpg",
  //         condition: "new",
  //         free_shipping: true,
  //         sold_quantity: 10,
  //         category_id: "456",
  //         description: "Test description",
  //       },
  //     }),
  //   }));

  //   jest.mock("../../api/services/categoriesById.service", () => ({
  //     getCategoriesById: jest.fn().mockResolvedValue({
  //       categories: ["Category 1", "Category 2"],
  //     }),
  //   }));

  //   const { getByTestId, getByLabelText } = render(
  //     <MemoryRouter>
  //       <DetailProduct />
  //     </MemoryRouter>
  //   );

  //   // Assert that the HeaderComponent and BreadCrumbsComponent are rendered
  //   expect(getByLabelText("Regresar a la home")).toBeInTheDocument();
  //   expect(getByTestId("container-breadcrumbs")).toBeInTheDocument();
  // });
});
