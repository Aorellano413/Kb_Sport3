import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "../static/css/style.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="logo">
          <img src="./static/img/LogoKb.jpg" alt="Logo de futbol" />
        </div>
        <nav className="navbar">
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/sobre-nosotros">Sobre Nosotros</Link>
          <Link to="/login">Iniciar Sesión</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Agrega aquí las rutas correspondientes */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
