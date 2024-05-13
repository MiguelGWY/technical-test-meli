import { render } from "@testing-library/react";
import { SearchPage } from "../SearchPage";
import "@testing-library/jest-dom";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("SearchPage", () => {
  it("should render SearchPage", () => {
    const { container } = render(<SearchPage />);
    expect(container).toMatchSnapshot();
  });
  
  it("should render HeaderComponent without errors", () => {
    const { getByRole } = render(<SearchPage />);
    expect(getByRole("banner")).toBeInTheDocument();
  });
});
