import React from 'react'
import FM from '../../Components/Images/Heropage/Full menu.png';
import BIMG from '../../Components/Images/Heropage/Burger image.png'
const HeroPage = () => {
    return (
        // <Sidebar>
            <div className='overflow-hidden '>
                {/* Your hero page content goes here */}
                <div className='mx-0 mt-32 ml-40 mr-14 md:ml-40 md:mr-4'>
                    <div className=' w-[20%] h-96 bg-white shadow-[0px_20px_45px_0px_#9797970D] relative  md:flex-row'>
                        <div className='w-[900px] h-96 top-[-8.56px] flex'>
                            <img src={FM} alt='img not found' className='w-full h-full object-cover rounded-3xl' />
                            <div className='absolute flex-col justify-between top-24 left-14 w-[487px] h-56 flex '>
                                <div >
                                <h1 className='font-poppins text-[13px] font-normal leading-[22.75px] tracking-[0.02em] text-left decoration-skip-ink text-[#EA6A12]'>👑 Deal of the weekend</h1>
                                </div>
                                <div>
                                    <p className="w-[487px] h-[52px] text-[#07143B] opacity-100  font-['Playfair_Display'] text-[40px] font-bold leading-[52px] tracking-[0.02em] text-center   decoration-skip-ink-none top-5">Hello,  Austine Robertson</p>
                                </div>
                                <div>
                                    <p className="w-[304px] text-slate-500 h-[28px] font-['Poppins'] text-[16px] font-semibold leading-[28px] tracking-[0.02em] text-center  decoration-skip-ink-none"
                                    >Get <b className='text-orange-500'>FREE delivery</b> on every weekend.</p>
                                </div>
                                <div>
                                    <button className="text-white w-[150px] h-[48px] px-[24px] py-[8px] gap-[3px] rounded-3xl bg-[#EA6A12]"
                                    ><b>Check Now</b></button>
                                </div>
                            </div>
                            {/* <div className='w-96 h-72 ml-10'> */}
                            <img src={BIMG} alt='img not found' className='absolute w-96 h-72 ml-10 bg[#FFF6D8] object-cover rounded-3xl left-[954px] z-10' />
                            {/* </div> */}
                            <div className='absolute flex-col w-[382px] h-[274px] left-[934px] top-[111px] bg-[#FFFFFF99]'>
                                <h1 className=" ml-[7rem] w-[516px] h-[52px] font-['Playfair_Display'] text-[40px] font-bold leading-[52px] tracking-[0.02em]  decoration-skip-ink-none text-[#07143B] my-[105px]">50 % off <br/><b className="text-xs w-[516px] h-6 text-slate-500"> The full price of burgers</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        // </Sidebar>
    );
}


export default HeroPage;





