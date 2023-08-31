import React from 'react'
import { Card } from './Card'

export const Cards = ({ personajes }) => {

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
