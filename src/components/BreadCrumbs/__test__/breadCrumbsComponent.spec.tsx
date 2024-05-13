import { render } from "@testing-library/react";
import { BreadCrumbs } from "../BreadCrumbsComponent";
import "@testing-library/jest-dom";

const categories = ["Category 1", "Category 2"];

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("BreadCrumbsComponent", () => {
  it("should render BreadCrumbsComponent", () => {
    const { container } = render(<BreadCrumbs categories={categories} />);
    expect(container).toMatchSnapshot();
  });

  it('should render a div with class "container-breadcrumbs" when categories prop is not empty', () => {
    const categories = ["category1", "category2"];

    const { getByTestId } = render(<BreadCrumbs categories={categories} />);

    const container = getByTestId("container-breadcrumbs");

    expect(container).toBeInTheDocument();
    expect(container).toHaveClass("container-breadcrumbs");
  });

  it("should render null when categories prop is empty", () => {
    const categories: string[] = [];

    const { container } = render(<BreadCrumbs categories={categories} />);
    expect(container).toBeEmptyDOMElement();
  });
});
