import { useNavigate } from "react-router-dom";
import "./BreadCrumbsComponent.scss";

export const BreadCrumbs = ({ categories }: BreadCrumbsProps) => {
  const navigate = useNavigate();
  const nameSpace = "container-breadcrumbs";

  if (!categories || categories.length === 0) return null;

  return (
    <div data-testid="container-breadcrumbs" className={nameSpace}>
      <ol className={`${nameSpace}__breadcrumb`}>
        {categories.map((crumb, index) => (
          <li className={`${nameSpace}__list`} key={crumb}>
            <button
              className={`${nameSpace}__redirect-button`}
              onClick={() => navigate(`/items?search=${crumb}`)}
            >
              {crumb}
            </button>
            {index < categories.length - 1 && " > "}
          </li>
        ))}
      </ol>
    </div>
  );
};
