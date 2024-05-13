import { render } from "@testing-library/react";
import { ResultSearchPage } from "../ResultSearchPage";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

describe("ResultSearchPage", () => {
  it("should render ResultSearchPage", () => {
    const { container } = render(
      <MemoryRouter>
        <ResultSearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  //   it("should call getProducts with the searchParam from the URL", async () => {
  //     const searchParam = "example";
  //     const getProductsMock = jest.spyOn(productsService, "getProducts")
  //       .mockResolvedValueOnce({});

  //     render(<ResultSearchPage />);

  //     await waitFor(() => {
  //       expect(getProductsMock).toHaveBeenCalledWith(searchParam);
  //     });

  //     expect(getProductsMock).toHaveBeenCalledTimes(1);
  //   });
});
