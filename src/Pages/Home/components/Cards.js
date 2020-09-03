import React from 'react'

export const Card = (props) => (
    <article style={{ backgroundImage: `url(${props.image})`}}>   // Doble {{}} la primera indica que es codigo js y la segunda para definir objeto
        <h2>{ props.description }</h2>
        <h6>{ props.place }</h6>
    </article>
)