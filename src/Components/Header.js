import React from 'react';
import Search from './Images/Search.png';
import Img from './Images/navbar icons/Frame 37291.png';
import { Bell, Mail, ShoppingCart } from 'lucide-react';

export default function Header() {
    return (
        <div className={`fixed top-0 left-0 w-full bg-white z-50 shadow-md transition-all duration-300 `}>
            <div className="container mx-auto px-12 h-20 flex justify-between items-center"> {/* Container for centering and padding */}
                <div className='rounded-full ml-32 my-4 h-10 w-72 pt-2 pr-4 pb-2 pl-4 gap-2 flex bg-[#FFFFFF] border border-[#E3E1E1] text-justify'> {/* Search Bar */}
                    <div className='ml-2'>
                        <img src={Search} alt='Search' className='h-4 w-4'/>
                    </div>
                    <div>
                        <input type='text' placeholder='Search...' className='w-60 h-7 font-poppins text-base font-normal leading-[28px] tracking-[0.02em] text-left text-[#959895]'/>
                    </div>
                </div>

                <div className="flex items-center space-x-8"> {/* Right header, space-x for spacing */}
                    <Bell className="h-6 w-6 text-orange-500 hover:cursor-pointer hover:fill-orange-500 transition-colors duration-300" />
                    <Mail className="h-6 w-6 text-orange-500 hover:cursor-pointer hover:fill-orange-500 transition-colors duration-300" />
                    <ShoppingCart className="h-6 w-6 text-orange-500 hover:cursor-pointer hover:fill-orange-500 transition-colors duration-300" />
                    <div className="flex items-center"> {/* Image and Name */}
                        <div className="h-11 w-11 bg-[#FFF3EB] rounded-full overflow-hidden"> {/* Image div, rounded-full, overflow-hidden */}
                            <img src={Img} alt='Profile' className="h-full w-full object-cover" /> {/* object-cover for image scaling */}
                        </div>
                        <div className="ml-5">
                            <p className="text-black font-poppins text-base font-normal leading-[28px] tracking-[0.02em] text-left">John Doe</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}