import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import RickAndMortyService from '../../services/RickAndMorty.service';

export const Cards = () => {

  const [personajes, setPersonajes] = useState([]);

  useEffect( () => {
    RickAndMortyService.getAllCharacters()
    .then((info) => setPersonajes(info.results))
    .catch((error) => console.log(error));
  }, [personajes])

  const cardsList = personajes.map((p) => <Card personaje = {p} key={p.id} />)

  return (
    <div className="album py-5 bg-body-tertiary">
          <div className="container">

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {cardsList}
            </div>

          </div>
        </div>
  )
}
