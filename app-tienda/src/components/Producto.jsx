import React, { useState } from "react";
import { Link } from "react-router-dom";
import NoFavImg from "../img/corazon.jpg";
import FavImg from "../img/me-gusta.jpg";

export default function Producto({
  producto,
  agregarFavoritos,
  eliminarDeFavoritos,
}) {
  const [favorito, setFavorito] = useState(false);

  function handleClick() {
    if (favorito) {
      eliminarDeFavoritos(producto);
      setFavorito(false);
    } else {
      agregarFavoritos(producto);
      setFavorito(true);
    }
  }

  return (
    <div className="producto">
      <Link to={`/producto/${producto.id}`}>
        <img src={producto.image} />
      </Link>
      <div className="info">
        <p>{producto.title}</p>
        <mark>${producto.price}</mark>
      </div>
      {favorito ? (
        <img onClick={handleClick} className="fav-icon" src={FavImg} />
      ) : (
        <img onClick={handleClick} className="fav-icon" src={NoFavImg} />
      )}
    </div>
  );
}
