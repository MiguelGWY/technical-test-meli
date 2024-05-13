import { useEffect, useState } from "react";
import { getProducts } from "../../api/services/products.service";
import { HeaderComponent } from "../../components/Header/HeaderComponent";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbsComponent";
import { ProductCardComponent } from "../../components/ProductCard/ProductCardComponent";
import { Link, useLocation } from "react-router-dom";
import "./ResultSearchPage.scss";

export const ResultSearchPage = () => {
  const nameSpace = "container-products";
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search).get("search");
  const [products, setProducts] = useState<ItemSearchResponse | undefined>();

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const productSearch = await getProducts(searchParams || "");
        setProducts(productSearch);
      } catch (error) {
        console.error("Se presentó un error en la petición", error);
      }
    };

    fetchProductsData();
  }, [searchParams]);

  const renderProductList = () => {
    return (
      <ol className={`${nameSpace}__ol`}>
        {products?.items?.map((product) => (
          <li key={product.id} className={`${nameSpace}__li`}>
            <Link to={`/items/${product.id}`} className={`${nameSpace}__link`}>
              <ProductCardComponent {...product} />
            </Link>
          </li>
        ))}
      </ol>
    );
  };

  return (
    <>
      <HeaderComponent />
      <section className={nameSpace}>
        <div className={`${nameSpace}__container-breadCrumbs`}>
          <BreadCrumbs categories={products?.categories || []} />
        </div>
        <div className={`${nameSpace}__container-list`}>
          {products && renderProductList()}
        </div>
      </section>
    </>
  );
};
