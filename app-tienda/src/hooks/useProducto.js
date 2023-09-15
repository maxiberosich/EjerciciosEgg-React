import React, { useEffect, useState } from "react";
import { obtenerProductos } from "../services/productoService";

export default function useProducto() {
  const [productos, setProductos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    obtenerProductos().then((data) => {
      setProductos(data);
    }, []);
  });

  function agregarFavoritos(producto) {
    const newFavoritos = [...favoritos];
    newFavoritos.push(producto);
    setFavoritos(newFavoritos);
  }

  function eliminarDeFavoritos(producto) {
    const newFavoritos = favoritos.filter((e) => e.id !== producto.id);
    setFavoritos(newFavoritos);
  }
  return { productos, favoritos, agregarFavoritos, eliminarDeFavoritos };
}
