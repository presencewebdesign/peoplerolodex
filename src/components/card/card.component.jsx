import React from 'react';

import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img
      alt={`${props.person.name.title} ${props.person.name.first} ${props.person.name.last}`}
      src={`${props.person.picture.large}`}
    />
    <h2> {props.person.name.title} {props.person.name.first} {props.person.name.last}</h2>
    <p> {props.email} </p>
  </div>
);
