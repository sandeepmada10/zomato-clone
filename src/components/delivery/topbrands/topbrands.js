import React from 'react'
import './topbrands.css'
import Topbranditems from './topbrandsitems/topbranditems';
import Slider from 'react-slick';
import NextArrow from '../../../common/NextArrow';
import PrevArrow from '../../../common/PrevArrow';

const brandItem=[
    {
        id:1,
        title:'Burger king',
        image:"https://d1u4oo4rb13yy8.cloudfront.net/article/rgcairphur-1529557627.jpg"
    },
    {
        id:2,
        title:'Nestle',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1b81Vu8RMM4S9__8Mm5mOE800eIp_Aum0tw&usqp=CAU"
    },
    {
        id:3,
        title:'Barbeque',
        image:"https://timesnext.com/content/images/wp-content/uploads/2020/05/Top-food-chains-in-India-1.jpg"
    }
]

const settings = {
    
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
export default function Topbrands() {
  return (
    <div className='topbrand-collections'>
    <div className='max-width'>
        <div className='collection-title topbrand-title'>Top brands for you</div>
        <Slider {...settings} >
            {brandItem.map((item)=>{
                return <div className='brand-name'>
                    <Topbranditems item={item}/>
                </div>
            })}

            </Slider>
    </div>
</div>
  )
}
