import React from 'react';

const Column = (props) => (
  <div className={`col-${props.size}`}>
  {props.children}
  </div>
)

export default Column;