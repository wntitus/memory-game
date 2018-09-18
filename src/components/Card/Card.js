import React from 'react';

const Card = props => (
  <div className = 'card m-3 shadow btn btn-light' onClick = {() => props.clickHandler(props.id)}>
    <div className = 'card-body p-3'>
      <img alt = {props.name} src = {props.image} width = '170' height = '170'/>
    </div>
  </div>
)

export default Card;