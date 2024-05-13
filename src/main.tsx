import ReactDOM from "react-dom/client";
import { MeliAppRouter } from "./routes/MeliAppRouter";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <MeliAppRouter />
  </BrowserRouter>
);
