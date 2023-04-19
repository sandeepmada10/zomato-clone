import React, { useState } from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import TabOptions from '../components/tabOptions/tabOptions';
import Delivery from '../components/delivery/delivery';
import Diningout from '../components/diningout/diningout';
import Nightlife from '../components/nightlife/nightlife';

export default function Homepage() {
    const [activeTab,setActiveTab]=useState("Delivery")


  return (
    <div>
        <Header />
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
        {getCorrectScreen(activeTab)}
        <center><Footer /></center>
    </div>
  )
}

const getCorrectScreen=(tab)=>{
    switch(tab){
        case "Delivery":
            return <div>
                <Delivery />
            </div>;
        case "DiningOut":
            return <div>
                <Diningout />
            </div>;
        case "NightLife":
            return <div>
                <Nightlife />
            </div>;
        default:
            return <div>
                <Delivery />
            </div>
    }
}
