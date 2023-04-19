import React from 'react'
import './topbranditems.css'

export default function Topbranditems({item}) {
  return (
    <div>
        <div className='brand-image'>
            <img src={item.image}
            className='brand-image'
            alt={item.image}
            height='100px'
            width='100px'/>
        </div>
        <div className='brand-title'>
            {item.title}
        </div>
    </div>
  )
}
