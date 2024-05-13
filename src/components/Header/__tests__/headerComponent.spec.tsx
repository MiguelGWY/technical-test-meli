import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { HeaderComponent } from "../HeaderComponent";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("HeaderComponent", () => {
  it("should render HeaderComponent", () => {
    const { container } = render(<HeaderComponent />);
    expect(container).toMatchSnapshot();
  });

  it("should render a header component with a logo and search bar", () => {
    const { getByPlaceholderText, getByAltText } = render(<HeaderComponent />);

    const logo = getByAltText("logo mercadolibre");
    const searchInput = getByPlaceholderText("Nunca dejes de buscar");

    expect(logo).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });

  it("should allow user to input search query and submit form", () => {
    const { getByPlaceholderText, getByTestId } = render(<HeaderComponent />);
    const searchInput: any = getByPlaceholderText("Nunca dejes de buscar");
    const form = getByTestId("form-input");

    fireEvent.change(searchInput, { target: { value: "test query" } });
    fireEvent.submit(form);

    expect(searchInput.value).toBe("test query");
  });
});
