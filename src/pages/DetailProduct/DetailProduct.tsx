import { useEffect, useState } from "react";
import { HeaderComponent } from "../../components/Header/HeaderComponent";
import { getItemById } from "../../api/services/productsById.service";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbsComponent";
import { getCategoriesById } from "../../api/services/categoriesById.service";
import { DetailProductCard } from "../../components/DetailProductCard/DetailProductCardComponent";
import { useLocation } from "react-router-dom";
import "./DetailProduct.scss";

export const DetailProduct = () => {
  const nameSpace = "container-detail";
  const [itemData, setItemData] = useState<ItemDetailResponse | null>(null);
  const location = useLocation();
  const idProduct = location.pathname.split("/").pop();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        if (idProduct) {
          const product = await getItemById(idProduct);
          const productCategories = await getCategoriesById(
            product.item.category_id
          );
          const itemDetailResponse: ItemDetailResponse = {
            author: product.author,
            item: {
              ...product.item,
              ...productCategories,
            },
          };
          setItemData(itemDetailResponse);
        }
      } catch (error) {
        console.error(
          "Se presentó un error en la petición del producto",
          error
        );
      }
    };

    fetchProductData();
  }, [idProduct]);

  return (
    <>
      <HeaderComponent />
      <section className={nameSpace}>
        <div className={`${nameSpace}__breadcrumbs`}>
          <BreadCrumbs categories={itemData?.item.categories || []} />
        </div>
        <div className={`${nameSpace}__product`}>
          {itemData && <DetailProductCard {...itemData.item} />}
        </div>
      </section>
    </>
  );
};
