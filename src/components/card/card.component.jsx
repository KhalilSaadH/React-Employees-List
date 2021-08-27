import React from 'react'
import './card.styles.css'

export const Card = props => (
<div className='card-container' >
    <img alt="employee" src={`https://i.pravatar.cc/180?u=${props.employee.id}`} />
    <h4> {props.employee.name} </h4>
    <p> {props.employee.email} </p>
</div>
);