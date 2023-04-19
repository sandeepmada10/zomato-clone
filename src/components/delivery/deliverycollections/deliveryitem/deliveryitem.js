import React from 'react';
import './deliveryitem.css';

export default function Deliveryitem({item}) {
  return (
    <div>
        <div className='item-cover'>
            <img src={item.image}
            className='item-image'
            alt={item.image}
            height='100px'
            width='100px'
            />
            <div className='item-title'>{item.title}</div>
        </div>
        </div>
  )
}
