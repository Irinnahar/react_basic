import React from 'react';
import './card.style.css';

export const Card = (props) => {
    const { name, email, id } = props.monster;
    return(
        <div className="card-container">
            <img src={`https://robohash.org/${id}?set=set4&size=150x180`} />
            <h1>{name} </h1>
            <p>{email} </p>
        </div>
    )
}