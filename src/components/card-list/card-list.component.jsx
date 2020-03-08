import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (


  <div className='card-list'>
    {props.people.map(person => (
      <Card key={person.login.uuid} person={person} />
    ))}
  </div>
);
