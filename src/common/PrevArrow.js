import React from 'react'

export default function PrevArrow(props) {
    const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background:'white' ,display:'flex', borderRadius:'50%' , justifyContent:'center', alignItems:'center'}}
      onClick={onClick}
    />
  )
}
