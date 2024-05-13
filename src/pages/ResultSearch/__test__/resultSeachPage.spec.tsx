import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { ResultSearchPage } from "../ResultSearchPage";
import { MemoryRouter } from "react-router-dom";
import { getProducts } from "../../../api/services/products.service";

// Mock de productos
jest.mock("../../../api/services/products.service");

describe("ResultSearchPage", () => {
  it("should render ResultSearchPage", () => {
    const { container } = render(
      <MemoryRouter>
        <ResultSearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
  
  it("should render HeaderComponent and BreadCrumbsComponent", async () => {
    const mockProducts = {
      items: [
        { id: 1, title: "Product 1", price: 10 },
        { id: 2, title: "Product 2", price: 20 },
      ],
      categories: ["Category 1", "Category 2"],
    };

    (getProducts as jest.Mock).mockResolvedValueOnce(mockProducts);

    render(
      <MemoryRouter>
        <ResultSearchPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId("header-component")).toBeInTheDocument();
      expect(screen.getByTestId("container-breadcrumbs")).toBeInTheDocument();
    });
  });

  it("should render product list", async () => {
    // Mock de datos de productos
    const mockProducts = {
      items: [
        { id: 1, title: "Product 1", price: 10 },
        { id: 2, title: "Product 2", price: 20 },
      ],
      categories: ["Category 1", "Category 2"],
    };

    (getProducts as jest.Mock).mockResolvedValueOnce(mockProducts);

    render(
      <MemoryRouter>
        <ResultSearchPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
    });
  });

});
