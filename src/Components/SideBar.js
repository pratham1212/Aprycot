import React, { useState } from 'react';
import Logo from './Images/Logo.png';
import MLogo from './Images/Main Logo.png';
import Sep from './Images/Separator.png';
import { LayoutDashboard, Users, IdCard, Mail, Package, Settings } from 'lucide-react';

// export default function SideBar({ isExpanded, setIsExpanded }) {
//     const [logo, setLogo] = useState(Logo);
//     const [sidebarClass, setSidebarClass] = useState('w-32');
//     const [sep, setSep] = useState('w-32 h-[1.01px]');
//     const [expanded, setExpanded] = useState(false);

//     const sidebarItems = [
//         { name: "Dashboard", icon: LayoutDashboard },
//         { name: "Users", icon: Users },
//         { name: "Authentication", icon: IdCard },
//         { name: "Mail", icon: Mail },
//         { name: "Widgets", icon: Package },
//         { name: "Settings", icon: Settings },
//     ];

//     const renderSidebarName = (expanded, item) => {
//         if (expanded) {
//             return (
//                 <span className='ml-2 text-slate-400 group-hover:text-white'>{item.name}</span>
//             );
//         }
//         return null;
//     };

//     return (
//         <>
//             <div
//                 className="fixed left-0 top-0 h-full z-[100] bg-[#FFFFFF] shadow-[0px_10px_30px_0px_#EA6A120D] transition-all duration-300"
//                 onMouseEnter={() => {
//                     setLogo(MLogo);
//                     setSidebarClass('w-64 transition-all duration-300');
//                     setSep('w-64 h-[1.01px]');
//                     setExpanded(true);
//                     setIsExpanded(true);
//                 }}
//                 onMouseLeave={() => {
//                     setLogo(Logo);
//                     setSidebarClass('w-32 transition-all duration-300');
//                     setSep('w-32 h-[1.01px]');
//                     setExpanded(false);
//                     setIsExpanded(false);
//                 }}
//             >
//                 <div className={`h-[2163px] ${sidebarClass} bg-[#FFFFFF] shadow-[0px_10px_30px_0px_#EA6A120D] flex flex-col items-center justify-start fixed z-[100]`}> {/*Side bar started */}
//                     <div className='w-full h-20 flex items-center justify-center'> {/*Logo Started */}
//                         <img src={logo} alt="Logo" className={`w-20 h-16 m-4`} />
//                     </div>
//                     <div className={`bg-[#E9ECEF] ${sep} border-b-2`}></div>
//                     <div className='mt-4 flex flex-col items-center w-full'>
//                         {sidebarItems.map((item, index) => (
//                             <div key={index} className='flex items-center justify-center p-2 hover:rounded-3xl hover:bg-orange-500 cursor-pointer mt-3 w-full group'>
//                                 <item.icon className='w-8 h-8 rounded-3xl text-orange-500 group-hover:text-white transition-transform duration-300 transform group-hover:-translate-x-2 ' />
//                                 {renderSidebarName(expanded, item)}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }



// import React, { useState } from 'react';
// import Logo from './UserDashboard/Images/Logo.png';
// import MLogo from './UserDashboard/Images/Main Logo.png';
// import { LayoutDashboard, Users, IdCard, Mail, Package, Settings } from 'lucide-react';

export default function SideBar() {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const sidebarItems = [
        { name: "Dashboard", icon: LayoutDashboard },
        { name: "Users", icon: Users },
        { name: "Authentication", icon: IdCard },
        { name: "Mail", icon: Mail },
        { name: "Widgets", icon: Package },
        { name: "Settings", icon: Settings },
    ];

    return (
        <div
            className={`fixed left-0 top-0 h-full z-[100] bg-[#FFFFFF] shadow-lg transition-all duration-300 ${isExpanded ? 'w-64' : 'w-32'}`}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >
            <div className="h-full flex flex-col items-center justify-start">
                {/* Logo Section */}
                <div className="w-full h-20 flex items-center justify-center">
                    <img src={isExpanded ? MLogo : Logo} alt="Logo" className="w-20 h-16 m-4" />
                </div>
                {/* Separator */}
                <div className={`bg-[#E9ECEF] ${isExpanded ? 'w-64' : 'w-32'} h-[1.01px] border-b-2`}></div>

                {/* Sidebar Items */}
                <div className="mt-4 flex flex-col items-center w-full">
                    {isExpanded && (
                        <>
                            <div className='w-64 h-11 flex items-center gap-2 pt-2 pr-4 pb-2 pl-8'>
                                <h1 className='font-poppins font-normal text-base leading-7 tracking-wide text-slate-400'>
                                    Home
                                </h1>
                            </div>
                            <hr className="w-64 border-t border-gray-300" />
                        </>
                    )}
                    {sidebarItems.map((item, index) => (
                        <div key={index} className="w-full">
                            {isExpanded && index === 1 && (
                                <>
                                    <div className='w-64 h-11 gap-10 pt-2 pr-4 pb-2 pl-8'>
                                        <h1 className='font-poppins font-normal text-base leading-7 tracking-wide text-slate-400'>
                                            Pages
                                        </h1>
                                    </div>
                                    <hr className="w-64 border-t border-gray-300" />
                                </>
                            )}
                            <div className="flex items-center p-2 hover:rounded-3xl hover:bg-orange-500 cursor-pointer mt-3 w-full group">
                                {/* Icon stays centered initially and moves left when hovered */}
                                <div className="flex justify-center group-hover:justify-start w-12 transition-all duration-300">
                                    <item.icon className="w-8 h-8 ml-5 text-orange-500 group-hover:text-white transition-transform duration-300 transform group-hover:-translate-x-2" />
                                </div>
                                {isExpanded && <span className="ml-2 text-slate-400 group-hover:text-white">{item.name}</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
