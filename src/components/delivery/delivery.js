import React from 'react';
import "./delivery.css";
import Filters from '../filters/filters';
import DeliveryCollection from './deliverycollections/deliveryCollection';
import Topbrands from './topbrands/topbrands';

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
        title:'Pure-Veg'
    },
    {
        id:5,
        title:'Cuisines'
    }
]

export default function Delivery() {
  return (
    <div>
    <div className='max-width'>
        <Filters FiltersList={FilterList}/>
        
    </div>
    <DeliveryCollection />
    
    <Topbrands />
    {/* <ExploreComponent /> */}
    </div>
  )
}
