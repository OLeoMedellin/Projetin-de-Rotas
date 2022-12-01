import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Sobre from "./pages/Sobre";
import Contatos from "./pages/Contatos";
import Produtos from "./pages/Produtos";
import Erro from "./pages/Erro";
import Inicio from "./pages/Inicio";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="contatos" element={<Contatos />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="*" element={<Erro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);