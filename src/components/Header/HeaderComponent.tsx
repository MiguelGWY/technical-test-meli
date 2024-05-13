import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderComponent.scss";

export const HeaderComponent = () => {
  const nameSpace = "nav-header";
  const logoMeli =
    "https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.43/mercadolibre/logo_large_25years_v2.png";

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue) {
      navigate(`/items?search=${inputValue}`);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <header className={nameSpace}>
      <div className={`${nameSpace}__container`}>
        <div className={`${nameSpace}__logo`}>
          <button
            className={`${nameSpace}__redirect-button`}
            aria-label="Regresar a la home"
            onClick={() => navigate(`/`)}
          >
            <img src={logoMeli} alt="logo mercadolibre" />
          </button>
        </div>
        <div className={`${nameSpace}__search`}>
          <form data-testid="form-input" className={`${nameSpace}__form`} onSubmit={handleFormSubmit}>
            <label className={`${nameSpace}__label`}>
              Ingresa lo que quieras encontrar
            </label>
            <input
              placeholder="Nunca dejes de buscar"
              className={`${nameSpace}__search-input`}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
          </form>
        </div>
      </div>
    </header>
  );
};
