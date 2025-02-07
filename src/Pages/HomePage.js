import React from 'react'
import HeroPage from './HomePage Components/HeroPage';
import MenuCatagory from './HomePage Components/MenuCatagory';

export default function HomePage() {
    return (
        <>
            <div>
                <HeroPage />
            </div>
            <div>
                <MenuCatagory />
            </div>
        </>
    )
}
