import React from 'react';
import "./header.css";

export default function Header() {
  return (
    <div className='max-width header'>
        <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
        alt='Zomato'
        className="header-logo"/>
        <div className='header-left'>
            <div className='header-location-search-container'>
                <div className='location-wrapper'>
                <div className='location-icon-name'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXebDUnvMM2KWahLNh-ZsnHK08Y7NBspbpK0oeMPo&s'
                    alt='Location-icon' height='25px' width='25px'
                    className='icons'/>
                    <div className='loaction-name'><input placeholder='Search for Location' className='location-input'></input></div>
                    

                </div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTECCf3S6PSYoc0pClD5e1OSVahc6llk4rBMRVueg&s' 
                    alt='carot-icon' height='20px' width='20px'
                    className='carot-icon icons'/>
                </div>
                <div className='location-search-seperator'></div>
                <div className='header-search-bar'>
                    <img src='https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png'
                    alt='search-bar' height='25px' width='25px'
                     className='search-icon icons'/>
                     <input placeholder='Search for restaurant or dishes' className='search-input'></input>
                </div>
               
            </div>
            <div className='login'>Log in</div>
            <div className='Sign-up'>Sign Up</div>

        </div>
    </div>
  )
}
