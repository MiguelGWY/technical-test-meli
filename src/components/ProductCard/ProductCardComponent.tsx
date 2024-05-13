import { formatCondition } from "../../utils/formattedCondition";
import { formattedPrice } from "../../utils/formattedPrice";
import "./ProductCardComponent.scss";

export const ProductCardComponent = ({
  title,
  picture,
  price,
  condition,
}: Item) => {
  const nameSpace = "container-product";

  return (
    <section className={nameSpace}>
      <div className={`${nameSpace}__product-elements`}>
        <div className={`${nameSpace}__img`}>
          <img src={picture} alt="Producto" />
        </div>
        <div className={`${nameSpace}__detail`}>
          <div className={`${nameSpace}__title`}>
            <p>{title}</p>
          </div>
          <div className={`${nameSpace}__price`}>{formattedPrice(price)}</div>
          <div className={`${nameSpace}__condition`}>
            {formatCondition(condition)}
          </div>
        </div>
      </div>
    </section>
  );
};
