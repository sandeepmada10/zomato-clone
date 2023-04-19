import React from 'react';
import Slider from 'react-slick';
import NextArrow from '../../../common/NextArrow';
import PrevArrow from '../../../common/PrevArrow';
import './deliveryCollection.css';
import Deliveryitem from './deliveryitem/deliveryitem';


const deliveryItems=[
    {
        id:1,
        title:'Pizza',
        image:'https://media-cdn.tripadvisor.com/media/photo-s/15/8b/be/e8/cheese-max-pizza.jpg'
    },
    {
        id:2,
        title:'Burger',
        image:'https://www.thespruceeats.com/thmb/POpuxXZ8hoq56_m7KUPcy41clvo=/2668x2001/smart/filters:no_upscale()/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg'
    }, 
    {
        id:3,
        title:'Sandwich',
        image:'https://static.toiimg.com/thumb/83740315.cms?imgsize=361903&width=800&height=800'
    },
    {
        id:4,
        title:'Biryani',
        image:'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken.jpg'
    },
    {
        id:5,
        title:'Chicken Fry',
        image:'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/chicken-fry.jpg'
    }
]

const settings = {
    
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

export default function DeliveryCollection() {
  return (
    <div className='delivery-collections'>
        <div className='max-width'>
            <div className='collection-title'>Eat what makes you happy</div>
            <Slider {...settings} >
                {deliveryItems.map((item)=>{
                    return <div className='item-name'>
                        <Deliveryitem item={item}/>
                    </div>
                })}

                </Slider>
        </div>
    </div>
  )
}
