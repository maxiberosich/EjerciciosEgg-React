import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Productos from "./components/Productos";
import useProducto from "./hooks/useProducto";
import Details from "./components/Details";

function App() {
  const { productos, favoritos, agregarFavoritos, eliminarDeFavoritos } =
    useProducto();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Productos
              productos={productos}
              agregarFavoritos={agregarFavoritos}
              eliminarDeFavoritos={eliminarDeFavoritos}
            />
          }
        />
        <Route
          path="/favoritos"
          element={
            <Productos
              productos={favoritos}
              agregarFavoritos={agregarFavoritos}
              eliminarDeFavoritos={eliminarDeFavoritos}
            />
          }
        />
        <Route path="/producto/:id" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
