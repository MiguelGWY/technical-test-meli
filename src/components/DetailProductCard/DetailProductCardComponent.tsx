import { formatCondition } from "../../utils/formattedCondition";
import "./DetailProductCardComponent.scss";

export const DetailProductCard = (item: Item) => {
  const nameSpace = "container";

  return (
    <div className={nameSpace}>
      <div className={`${nameSpace}__product-detail`}>
        <div className={`${nameSpace}__img-description`}>
          <div className={`${nameSpace}__img`}>
            <img src={item.picture} alt="product-image" />
          </div>
          <h2 className={`${nameSpace}__title-description`}>
            Descripcion del producto
          </h2>
          <p className={`${nameSpace}__description`}>{item.description}</p>
        </div>
        <div className={`${nameSpace}__product-info`}>
          <div className={`${nameSpace}__condition`}>
            {`${formatCondition(item.condition)} | +100 vendidos`}
          </div>
          <div className={`${nameSpace}__product-title`}>{item.title}</div>
          <p className={`${nameSpace}__price`}>$ {item.price.amount}</p>
          <p className={`${nameSpace}__subtitles`}>en 48x $ 15.685</p>
          <button className={`${nameSpace}__buy-button`}>Comprar</button>
        </div>
      </div>
    </div>
  );
};
