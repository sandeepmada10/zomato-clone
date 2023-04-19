import React from 'react';
import "./filters.css"
export default function Filters({FiltersList}) {
  return (
    <div className='filter-tab'>
        {FiltersList && 
        FiltersList.map((filter)=>{
            return <div className='filter-name'>{filter.title}</div>
        })}
    </div>
  )
}
