import React from 'react';
import Filters from '../filters/filters';
import "./diningout.css";

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
        title:'Outdoor Seating'
    },
    {
        id:4,
        title:'Serves Alcohol'
    },
    {
        id:5,
        title:'Open Now'
    }
]
export default function Diningout() {
  return (
    <div className='max-width'>
        <Filters FiltersList={FilterList}/>
        This is the Dining out page</div>
  )
}
