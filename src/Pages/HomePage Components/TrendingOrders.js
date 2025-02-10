import React,{useState} from 'react';
import Rsicon from '../../Components/Images/Menu catagory/Arrow - Right 5.png';
import Img1 from '../../Components/Images/Trending Orders/Trending image 1.png';
import Img2 from '../../Components/Images/Trending Orders/Trending image 2.png';
import Img3 from '../../Components/Images/Trending Orders/Trending image 3.png';
import Img4 from '../../Components/Images/Trending Orders/Trending image 4.png';
import Img5 from '../../Components/Images/Trending Orders/Trending image 5.png';
import Img6 from '../../Components/Images/Trending Orders/Trending image 6.png';
import CartBtn from '../../Components/Images/Trending Orders/Cart Button.png';
import CartBtnWhite from '../../Components/Images/Trending Orders/Cart Button-white.png';
import NotoCrown from '../../Components/Images/Trending Orders/noto_crown.png';

// function TrendingOrders() {

//     const [cartBtn,setCartBtn] = useState(CartBtn);

//     const trendingList = [
//         {id:1,name:"Italian Salad",img:Img1,price:7.49,calories:10 ,person:4,},
//         {id:2,name:"Italian Salad",img:Img2,price:7.49,calories:50,person:4,},
//         {id:3,name:"Italian Salad",img:Img3,price:7.49,calories:90,person:3,},
//         {id:4,name:"Italian Salad",img:Img4,price:7.49,calories:50,person:5,},
//         {id:5,name:"Italian Salad",img:Img5,price:7.49,calories:70,person:6,},
//         {id:6,name:"Italian Salad",img:Img6,price:7.49,calories:80,person:4,},
//     ]

//     return (
//         <>
//             <div className='overflow-hidden mt-20 ml-40 mr-14 md:ml-40 md:mr-4 mb-8'>
//                 <div className=' ml-10 mr-20  my-10 '> {/* Trending Orders started */}
//                     <div className='h-auto w-[1712px] mt-10 ml-10 gap-10 grid grid-cols-2  justify-between'> {/*Main div start 2 sections */}
//                         <div className='h-auto w-full'> {/*First Section */}
//                             <div className="h-auto gap-12 w-[100%]  items-center justify-between ">
//                                 <div className="flex justify-evenly md:justify-center gap-4 w-full h-auto" >
//                                     <div className="min-w-[10rem] flex-grow">
//                                         <h1 className="text-[#07143B] w-auto h-auto font-playfair-display text-4xl font-bold leading-[52px] tracking-[0.02em] text-left">
//                                             Trending Orders
//                                         </h1>
//                                     </div>
//                                     <div className="flex-shrink-0  flex items-center">
//                                         <span className="w-auto h-auto font-poppins text-base font-normal leading-[28px] tracking-[0.02em] text- text-black">
//                                             View All
//                                         </span>
//                                         <img src={Rsicon} alt="img not found" className="w-5 h-5 ml-5" />
//                                     </div>
//                                 </div>

//                                 <div> {/* cards started */}
//                                     <div className=" grid grid-cols-3 gap-4 p-4 bg-[#FFFFFF66]">
//                                         {
//                                             trendingList.map((item)=>{
//                                                 return(<>
//                                                     <div key={item.id} 
//                                                     onMouseEnter={() => setCartBtn(CartBtnWhite)} 
//                                                     onMouseLeave={() => setCartBtn(CartBtn)}
//                                                     className='w-58 h-72 rounded-2xl m-6 gap-4  backdrop-blur-[42px] relative hover:cursor-pointer hover:bg-orange-500 group'>
//                                                         <div className='w-48 h-16 gap-4 my-8 mx-4'>
//                                                             <div className='w-32 h-6 gap-1/2 flex flex-row'>
//                                                                 <div>
//                                                                     <img src={NotoCrown} alt="img not found" className="w-3 h-4" />
//                                                                 </div>
//                                                                 <div className='w-28 h-full'>
//                                                                     <p className="font-[Poppins] font-normal text-[13px] leading-[22.75px] tracking-[2%] text-[#EA6A12] group-hover:text-white">
//                                                                         Top of the week
//                                                                     </p>
//                                                                 </div>
//                                                             </div>
//                                                             <div>
//                                                                 <h1 className='w-48 h-6 text-[#07143B] font-[Poppins] font-semibold text-[16px] leading-[28px] tracking-[2%] group-hover:text-white'>{item.name}</h1>
//                                                             </div>
//                                                         </div>
//                                                         <div className='w-20 h-16 gap-2 my-8 mx-4'>
//                                                             <div>
//                                                                 <p className='w-20 h-6 text-slate-500 group-hover:text-white'>{item.calories} Calories</p>
//                                                             </div>
//                                                             <hr/>
//                                                             <div>
//                                                             <p className='w-20 h-6 text-slate-500 group-hover:text-white'>{item.person} Persons</p>
//                                                             </div>
//                                                         </div>
//                                                         <div className='w-24 h-full flex my-8 mx-4 justify-between'>
//                                                             <div>
//                                                                 <p className='w-12 h-7 font-bold group-hover:text-white'>$ {item.price} </p>
//                                                             </div>
//                                                             <div>
//                                                                 <img src={cartBtn} alt="img not found" className="w-6 rounded-full h-6" />
//                                                             </div>
//                                                         </div>
//                                                         <div className="absolute my-6 mx-1 top-11 left-48 transform -translate-x-1/2 flex justify-center items-center w-full ">
//                                                             <img src={item.img} alt="img not found" className="w-auto h-auto shadow-black" />
//                                                         </div>
//                                                     </div>
//                                                 </>)
//                                             })
//                                         }
                                        
//                                     </div>
//                                 </div>
//                             </div>
                                                
//                         </div> {/*First Section */}
//                     </div> {/*Main div start 2 sections */}
//                 </div> {/* Trending Orders started */}
//             </div>
//         </>
//     )
// }

// export default TrendingOrders;




function TrendingOrders() {
    // Store the ID of the hovered card
    const [hoveredCard, setHoveredCard] = useState(null);

    const trendingList = [
        { id: 1, name: "Italian Salad", img: Img1, price: 7.49, calories: 10, person: 4 },
        { id: 2, name: "Italian Salad", img: Img2, price: 7.49, calories: 50, person: 4 },
        { id: 3, name: "Italian Salad", img: Img3, price: 7.49, calories: 90, person: 3 },
        { id: 4, name: "Italian Salad", img: Img4, price: 7.49, calories: 50, person: 5 },
        { id: 5, name: "Italian Salad", img: Img5, price: 7.49, calories: 70, person: 6 },
        { id: 6, name: "Italian Salad", img: Img6, price: 7.49, calories: 80, person: 4 },
    ];

    const categoryList = [
        {id:1,name:"Burgers"},
        {id:2,name:"Pizza"},
        {id:3,name:"Desserts"},
        {id:4,name:"Desserts"},
        {id:5,name:"Biscuits"},
        {id:6,name:"Grilled Cheese"},
        {id:7,name:"Grilled Cheese"},
        {id:8,name:"Tomoto Soup"},
        {id:9,name:"Chicken Fingers"},
        {id:10,name:"Chicken"},
        {id:11,name:"Nuggets"},
        {id:12,name:"Flatbread Pizza"},
        {id:13,name:"Flatbread Pizza"},
        {id:14,name:"Mac & Cheese"},
        {id:15,name:"Mini Burgers"},
        {id:16,name:"Mini Burgers"},
        {id:17,name:"Mini Pizzas"},
        {id:18,name:"Grilled Cheese"},
        {id:19,name:"Grilled"},
        {id:20,name:"Veggie Grilled"},
        {id:21,name:"Sandwich"},
        {id:22,name:"Soup"},
    ];

    return (
        <>
            <div className='overflow-hidden mt-20 ml-40 mr-14 md:ml-40 md:mr-4 mb-8 '>
    <div className='w-full flex justify-between gap-10'> 
        {/* First Section: Trending Orders */}
        <div className='h-auto w-full'>
            <div className="h-auto gap-12 w-full items-center justify-between">
                <div className="flex justify-between items-center w-full h-auto">
                    <div className="min-w-[10rem] flex-grow">
                        <h1 className="text-[#07143B] font-playfair-display text-4xl font-bold">
                            Trending Orders
                        </h1>
                    </div>
                    <div className="flex-shrink-0 flex items-center">
                        <span className="font-poppins text-base font-normal text-black">
                            View All
                        </span>
                        <img src={Rsicon} alt="img not found" className="w-5 h-5 ml-5" />
                    </div>
                </div>

                {/* Trending Cards */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-[#FAF9F6]">
                    {trendingList.map((item) => (
                        <div key={item.id}
                            onMouseEnter={() => setHoveredCard(item.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className='w-52 h-72 rounded-2xl m-6 gap-4 backdrop-blur-[42px] relative hover:cursor-pointer hover:bg-orange-500 group'>
                            
                            {/* Content inside Card */}
                            <div className='w-48 h-16 gap-4 my-8 mx-4'>
                                <div className='w-32 h-6 flex items-center'>
                                    <img src={NotoCrown} alt="img not found" className="w-3 h-4" />
                                    <p className="font-[Poppins] text-[13px] text-[#EA6A12] group-hover:text-white">
                                        Top of the week
                                    </p>
                                </div>
                                <h1 className='w-48 h-6 text-[#07143B] font-[Poppins] font-semibold text-[16px] group-hover:text-white'>
                                    {item.name}
                                </h1>
                            </div>

                            <div className='w-20 h-16 gap-2 my-8 mx-4'>
                                <p className='text-slate-500 group-hover:text-white'>{item.calories} Calories</p>
                                <hr />
                                <p className='text-slate-500 group-hover:text-white'>{item.person} Persons</p>
                            </div>

                            <div className='w-24 flex justify-between my-8 mx-4'>
                                <p className='font-bold group-hover:text-white'>$ {item.price} </p>
                                <img src={hoveredCard === item.id ? CartBtnWhite : CartBtn} alt="img not found" className="w-6 h-6 rounded-full" />
                            </div>

                            <div className="absolute top-11 left-[93%] transform -translate-x-1/2 flex justify-center items-center w-full">
                                <img src={item.img} alt="img not found" className="w-auto h-auto shadow-black" />
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div> 

        {/* Second Section: Categories */}
        <div className='bg-[#FAF9F6] h-full w-[635px] p-6 backdrop-blur-[42px] rounded-2xl'>
            <div className="flex justify-between items-center">
                <h1 className="text-[#07143B] font-playfair-display text-2xl font-bold">
                    Categories
                </h1>
                <div className="flex items-center">
                    <span className="font-poppins text-base font-normal text-black">
                        View All
                    </span>
                    <img src={Rsicon} alt="img not found" className="w-5 h-5 ml-5" />
                </div>
            </div>
            <br />
            <hr />
            <br />
            <div className="grid grid-cols-3 gap-3">
                {categoryList.map((item) => (
                    <button 
                        key={item.id} 
                        className="bg-white text-orange-500 hover:text-white font-poppins px-3 py-2 rounded-full border-orange-500 border-2 hover:bg-orange-500 text-sm transition duration-300"
                    >
                        {item.name}
                    </button>
                ))}
            </div>
        </div>
    </div>
</div>

        </>
    );
}

export default TrendingOrders;
