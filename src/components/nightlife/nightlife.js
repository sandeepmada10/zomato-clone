import React from 'react';
import "./nightlife.css";
import Filters from '../filters/filters';

const FilterList=[
    {
        id:1,
        title:'Filters'
    },
    {
        id:2,
        title:'Rating'
    },
    {
        id:3,
        title:'Delivery Time'
    },
    {
        id:4,
        title:'Non-Veg'
    },
    {
        id:5,
        title:'Cuisines'
    }
]

export default function Nightlife() {
  return (
    <div className='max-width'>
    <Filters FiltersList={FilterList}/>
    This is NightLife page</div>
  )
}
