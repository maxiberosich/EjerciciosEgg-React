import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import RickAndMortyService from "../../services/RickAndMorty.service";

export const Detail = () => {
  const [personaje, setPersonaje] = useState({});
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    RickAndMortyService.getCharacterById(id).then((info) => setPersonaje(info));
  }, []);//SI SE PONE DENTRO DEL ARRAY EL ID, NO SERIA DE FORMA DINAMICA. Y EN CASO DE NO PONER NADA, SE REPETIRIA INFINITAS VECES EL SERVICIO, CONSUMIENDO MUCHOS RECURSOS

  return (
    <div className="row m-3">
      <div className="col-md-12">
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">
            <p>
              Specie:
            <strong className="d-inline-block mb-2 text-success">
              {personaje.species}
            </strong>
            </p>
            <h3 className="mb-8 text-dark">{personaje.name}</h3>
            <div className="mb-1 text-muted">
              Character creation date: {new Date(personaje.created).toLocaleDateString()}
            </div>
            <div className="mb-1 text-muted"></div>
            <p className="card-text mb-auto">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <ul className="list-group">
              <li className="list-group-item">Active item</li>
              <li className="list-group-item">Item</li>
              <li className="list-group-item">asasfasf</li>
              <li className="list-group-item">gergergergerg</li>
              <li className="list-group-item">uiyujyujyujyuj</li>
            </ul>

            <Link to={"/"} className="mt-3 btn btn-primary btn-lg">
              Volver
            </Link>
          </div>
          <img
            className="h-100 d-inline-block rounded card-img-right flew-auto d-none d-md-block m-4"
            src={personaje.image}
            alt=""
            height="auto"
          />
        </div>
      </div>
    </div>
  );
};
