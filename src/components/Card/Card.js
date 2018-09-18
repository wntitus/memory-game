import React from 'react';

const Card = props => (
  <div className = 'card m-3 shadow'>
    <div className = 'card-body'>
      <img alt = {props.name} src = {props.image} />
    </div>
  </div>
)

export default Card;