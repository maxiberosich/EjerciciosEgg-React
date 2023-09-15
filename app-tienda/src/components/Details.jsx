import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obternerProductoPorId } from "../services/productoService";

export default function Details() {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    obternerProductoPorId(id).then((data) => {
      setProducto(data);
    });
  }, [id]);

  return (
    <div className="detalle">
      <img src={producto.image} />
      <div>
        <h3>{producto.title}</h3>
        <blockquote>{producto.description}</blockquote>
        <mark>${producto.price}</mark>
      </div>
    </div>
  );
}
