import React, { useState } from 'react';
import Rsicon from '../../Components/Images/Menu catagory/Arrow - Right 5.png';
import Pizza from '../../Components/Images/Menu catagory/Pizza icon.png';
import Fruit from '../../Components/Images/Menu catagory/Fruits icon.png';
import Snacks from '../../Components/Images/Menu catagory/Snacks icon.png';
import Veggies from '../../Components/Images/Menu catagory/Veggies icon.png';
import Hotdog from '../../Components/Images/Menu catagory/Hotdog icon.png';
import Burger from '../../Components/Images/Menu catagory/Burger icon.png';
import Drink from '../../Components/Images/Menu catagory/Coke icon.png';
import Line1 from '../../Components/Images/Menu catagory/Vector 1.png';
import Line2 from '../../Components/Images/Menu catagory/Vector 2.png';
import CartImg1 from '../../Components/Images/Menu catagory/Cart image 1.png';
import CartImg2 from '../../Components/Images/Menu catagory/Cart image 2.png';
import CartImg3 from '../../Components/Images/Menu catagory/Cart image 3.png';
import CartImg4 from '../../Components/Images/Menu catagory/Cart image 4.png';
import DelIcon from '../../Components/Images/Menu catagory/Delete Icon.png';
import Items from '../../Components/Images/Menu catagory/items.png';
import RsIcon3 from '../../Components/Images/Menu catagory/Arrow - Right 3.png';
import Spaghetti from '../../Components/Images/Menu catagory/Spaghetti.png';
import Sweets from '../../Components/Images/Menu catagory/Sweets.png';
import MushroomPizza from '../../Components/Images/Menu catagory/Mushroom Pizza.png';
import VegetablePizza from '../../Components/Images/Menu catagory/Vegetable Pizza.png';
import Stars from '../../Components/Images/Menu catagory/Frame 35429.png';
import CartIcon from '../../Components/Images/Menu catagory/Add to cart Icon.png';

export default function MenuCatagory() {

    const [hoveredCategoryId, setHoveredCategoryId] = useState(null);

    const menuCategories = [
        {id:1 , name:"Pizza", img:Pizza },
        {id:2 , name:"Fruit", img:Fruit },
        {id:3 , name:"Snacks", img:Snacks },
        {id:4 , name:"Veggies", img:Veggies },
        {id:5 , name:"Hotdog", img:Hotdog },
        {id:6 , name:"Burger", img:Burger },
        // {id:7 , name:"Drink", img:Drink },
    ]

    const menuCategories1 = [
        {id:1, name:"Spaghetti", price:"7.29", img:Spaghetti},
        {id:2, name:"Vegetable Pizza", price:"5.49", img:VegetablePizza},
        {id:3, name:"Mushroom Pizza", price:"7.49", img:MushroomPizza},
        {id:1, name:"Sweets", price:"6.49", img:Sweets},
    ]

    const cartItems = [
        {id:1, name:"Mushroom Pizza", img:CartImg1 },
        {id:2, name:"Italian Pizza", img:CartImg2 },
        {id:3, name:"Sausage Pizza", img:CartImg3 },
        {id:4, name:"Cheese Pizza", img:CartImg4 },
    ]

    return (
        <>
        {/* <Sidebar> */}
            <div className="overflow-hidden mt-32 ml-40 mr-14 md:ml-40 md:mr-4">
                <div className="ml-10 mr-20  my-10">
                    <div className='h-auto w-full mt-10 ml-10 gap-10 grid grid-cols-2  justify-between '> {/* Main div start from */}
                        <div className='w-[56.25rem]  h-auto gap-10 '> {/* Menu category container */}
                        <div className="h-auto gap-12 w-full">
                            {/* Menu category 1st - Pizza */}
                            <div className="flex flex-wrap items-center justify-between md:justify-center gap-4">
                                {/* Menu category text */}
                                <div className="min-w-[10rem] flex-grow">
                                    <h1 className="text-[#07143B] w-auto h-auto font-playfair-display text-4xl font-bold leading-[52px] tracking-[0.02em] text-left">
                                        Menu Category
                                    </h1>
                                </div>
                                <div className="flex-shrink-0 pr-20 flex items-center">
                                    <span className="w-auto h-auto font-poppins text-base font-normal leading-[28px] tracking-[0.02em] text- text-black">
                                        View All
                                    </span>
                                    <img src={Rsicon} alt="img not found" className="w-5 h-5 ml-5" />
                                </div>
                            </div>
                        </div>

                            <div className="w-full h-auto gap-10 mt-10 ml-0">
                            {/* Menu category 2nd - Ice Cream */}
                            <div className="w-full h-auto flex flex-wrap gap-x-5 gap-y-8 justify-center md:justify-start">
                                {menuCategories.map((category) => (
                                    <div key={category.id} 
                                        onMouseEnter={() => setHoveredCategoryId(category.id)} 
                                        onMouseLeave={() => setHoveredCategoryId(null)}
                                        className="min-w-[7rem] max-w-[10rem] h-60 p-6 bg-[#FFFFFF66] backdrop-blur-[42px] hover:bg-orange-500 hover:rounded-2xl hover:cursor-pointer group"
                                        >
                                        <div className="w-16 h-16">
                                            <img src={category.img} alt="Img not found" className="w-[56px] h-[57px] top-[1px] left-1" />
                                            <h1 className="ml-[0.8rem] w-12 h-7 font-poppins text-base font-semibold leading-[28px] tracking-[0.02em] text-left text-[#07143B] group-hover:text-white">
                                                    {category.name}
                                            </h1>
                                            <img src={Line1} alt="Not found" className="w-8 ml-[1rem] border-0 border-[#EA6A12]" />
                                            <img src={hoveredCategoryId === category.id ? RsIcon3 : Rsicon}  
                                                    alt="img not found" 
                                                    className="group-hover:rounded-2xl w-5 h-5 my-5 ml-5 gap-6 bg-[#FFFFFF66] backdrop-blur-[42px]"
                                            />
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                            <div className='mt-10'>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
                                {menuCategories1.map((item) => (
                                    <div key={item.id} className="relative w-[10rem] h-60 p-6 mt-3 bg-[#FFFFFF66] rounded-2xl backdrop-blur-[42px] hover:bg-orange-500 hover:cursor-pointer group flex flex-col items-center">
                                        {/* Image Positioned Half Out */}
                                        <img 
                                            src={item.img} 
                                            alt="Img not found" 
                                            className="absolute top-[-20%] mt-6 left-1/2 transform -translate-x-1/2 w-124 h-24 drop-shadow-2xl"
                                        />
                                        <h1 className="mt-20 font-poppins text-base font-semibold text-center text-[#07143B] group-hover:text-white">
                                            {item.name}
                                        </h1>
                                        <img src={Stars} alt="Stars" className="w-20 h-4 my-2" />
                                        <h1 className="text-lg text-center font-bold group-hover:text-white">${item.price}</h1>
                                    </div>
                                ))}
                            </div>
                            </div>
                        </div>
                        <div className='w-[24.18rem] h-[40.62rem]  bg-[#FFFFFF99] backdrop-blur-[42px] mt-10 ml-60 mr-10 rounded-2xl'> {/* My cart container */}
                            <div className='pt-6 pl-6'> 
                                <div>
                                    <h1 className='w-23 h-7 font-playfair-display text-[23px] font-bold leading-[29.9px] tracking-[0.02em] text-left text-[#07143B]'>My Cart</h1>
                                </div>
                                <div>
                                    <img src={Line2} alt='img not found' className='w-[533px] h-0 mt-5  border border-[#E3E1E1] mx-auto'/>
                                </div>
                            </div>
                            <div className='w-full h-[608px] mt-5  '>
                                {
                                    cartItems.map((cItems)=>{
                                        return(
                                            <div className='w-full h-32 flex relative'>
                                                    <div className='relative left-8 top-2'>
                                                        <div className='w-72 h-20 relative  left-[33px] px-8 py-4  bg-[#FFF5EE] rounded-full flex '>
                                                            <div className='w-60 h-16  items-center gap-4'> {/* pizza names */}
                                                                <div className='w-[158px] h-[28px] text-[#07143B] font-poppins text-base font-semibold leading-[28px] tracking-[0.02em] ml-6 text-left drop-shadow-2xl'>{cItems.name}</div>
                                                                <div><img className='ml-6 w-5 h-6' src={Items} alt='img not found'/></div>
                                                            </div>
                                                            <div className=' items-center mt-4'> {/*Delete icon and rupees */}
                                                                
                                                                    <img className='w-6 h-6' src={DelIcon} alt='img not found'/>
                                                                    <p className='w-11 h-7 font-poppins text-[13px] font-normal leading-[22.75px] tracking-[0.02em] text-left '>$7.49</p>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='absolute top-0 left-0 '>
                                                        <img src={cItems.img} className='w-28 h-28 shadow-blend-darken' alt="Img not found"/>
                                                    </div>
                                                </div>
                                            )})
                                        }
                                        <div className='h-12 w-full justify-center item-center flex '>
                                        <button className="text-white w-[150px] h-[48px] px-[24px] py-[8px] gap-[3px] rounded-3xl bg-[#EA6A12]"
                                    ><b>Check Now</b></button>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </Sidebar> */}
        </>
    )
}




