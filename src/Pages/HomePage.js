import React from 'react'
import HeroPage from './HomePage Components/HeroPage';
import MenuCatagory from './HomePage Components/MenuCatagory';
import TrendingOrders from './HomePage Components/TrendingOrders';

export default function HomePage() {
    return (
        <>
            <div>
                <HeroPage />
            </div>
            <div>
                <MenuCatagory />
            </div>
            <div>
                <TrendingOrders />
            </div>
        </>
    )
}
