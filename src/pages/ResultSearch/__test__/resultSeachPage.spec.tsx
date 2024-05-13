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
});
