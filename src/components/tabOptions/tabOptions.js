import React from 'react';
import "./tabOptions.css";

const tabs = [
    {
        id: 1,
        name: "Delivery",
        active_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrzxuSN5Ktvbdgxzj1EcqN8vu2J-_Rk6RisgyJXhY&s",
        backdrop: "FCEEC0",
        inactive_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vimuRbctEp1JfvL4ze-nyWBYwoJIM4Pxc1xjvaU&s"
    },
    {
        id: 2,
        name: "DiningOut",
        active_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLOe6mBjqspD7a8twGVIrxNYOlkdc6omxqtf-wSxo&s",
        backdrop: "828282;",
        inactive_img: "https://previews.123rf.com/images/sumberejeki/sumberejeki2007/sumberejeki200702595/151907453-illustration-vector-graphic-of-restaurant-icon-fit-for-food-eat-dining-lunch-etc-.jpg"
    },
    {
        id: 3,
        name: "NightLife",
        active_img: "https://cdn4.iconfinder.com/data/icons/minimal-set-four/32/minimal-77-512.png",
        backdrop: "828282;",
        inactive_img: "https://static.thenounproject.com/png/1612251-200.png"
    }
]
export default function TabOptions({ activeTab, setActiveTab }) {
    return (
        <div className='tab-options'>
            <div className='max-width options-wrapper'>
                {tabs.map((tab) => {
                    return <div onClick={() => setActiveTab(tab.name)}
                        className={`tab-item absolute-center cursor-pointer ${activeTab === tab.name && 'active-tab'}`}>


                        <div className='tab-image-container absolute-center'
                        // style={{ background: `${activeTab === tab.name ? tab.backdrop : ""}` }} 
                        >
                            <img
                                className='tab-image'
                                height='50px'
                                width='50px'
                                alt={tab.name}
                                src={activeTab === tab.name ? tab.active_img : tab.inactive_img} />
                            <div className='tab-name'>{tab.name}</div>
                        </div>

                    </div>;


                })}
            </div>
        </div>
    )
}
