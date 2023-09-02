import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import RickAndMortyService from "../../services/RickAndMorty.service";

export const Detail = () => {
  const [personaje, setPersonaje] = useState({});
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    RickAndMortyService.getCharacterById(id).then((info) => setPersonaje(info));
  }, [id]);

  return (
    <div className="row m-3">
      <div className="col-md-12">
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-success">
              {personaje.species}
            </strong>
            <h3 className="mb-8 text-dark">{personaje.name}</h3>
            <div className="mb-1 text-muted">
              Fecha de creación del personaje: {new Date(personaje.created).toLocaleDateString()}
            </div>
            <div className="mb-1 text-muted"></div>
            <p className="card-text mb-auto">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <ul class="list-group">
              <li class="list-group-item">Active item</li>
              <li class="list-group-item">Item</li>
              <li class="list-group-item">asasfasf</li>
              <li class="list-group-item">gergergergerg</li>
              <li class="list-group-item">uiyujyujyujyuj</li>
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
