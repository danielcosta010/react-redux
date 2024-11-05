import PaginaPadrao from "components/PaginaPadrao";
import Categoria from "pages/Categoria";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="/categoria/:nomeCategoria" element={<Categoria />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;