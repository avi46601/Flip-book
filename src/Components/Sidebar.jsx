import React, { useEffect, useState } from 'react'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { LuInbox } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { TiWorld } from "react-icons/ti";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";


const Sidebar = () => {
    
    const [menu,setMenu]=useState(false);
    const yearData=['2024','2023','2022'];
    const [ScreenSize ,setScreenSize]=useState(window.innerWidth)
    const handlehumber=()=>{
       setMenu(!menu)
    }
   useEffect(()=>{
    const handleResize=()=>{
        setScreenSize(window.innerWidth);
    }
    window.addEventListener('resize',handleResize);
    return ()=>{
        window.removeEventListener('resize',handleResize);
    } 
   },[]);
   useEffect(()=>{
         if(ScreenSize<600){
            setMenu(!menu)
         }
         else if(ScreenSize>=600){
            setMenu(!menu)
         }
   },[ScreenSize])

   const [clickDown, setClickDown] = useState(false)
    const productDropdown = () => {
        setClickDown(!clickDown)


    }

    return (
        <div className={`h-screen flex relative  ${menu ? 'ml-0' : '-ml-64'} transition-all duration-1000`} >
            <div className='relative border rounded-r-[20px] h-[100vh] w-[250px] p-2 bg-white'>
                <div className=' relative text-center p-[10px] mb-5'>
                <div className='flex items-center' >
                        <TiWorld size={"30px"} />
                        <h1 className='font-bold text-[20px] ml-[3px]' > World Model Hunt</h1>
                    </div>
                    {menu && <button onClick={handlehumber} className='absolute bg-white rounded-full -right-6 top-7 '><FaArrowCircleLeft size={35} /></button>}
                    {!menu&&<button onClick={handlehumber} className='absolute bg-white rounded-full -right-[80px] top-7 '><FaArrowCircleRight size={35} /> </button>}
                </div>
                <div className= 'w-[100%]'>
                    <button className='flex items-center w-[100%] text-center text-lg p-2 hover:bg-[#ede9fe] hover:rounded-xl hover:text-blue-700'>
                        <MdOutlineDashboardCustomize />
                        <p className='ml-1 mr-[100px]'>Dashboard</p>
                    </button>
                    <button className='flex items-center w-[100%] text-center text-lg p-2 active:bg-[#ede9fe] hover:rounded-xl hover:text-blue-700' onClick={productDropdown}>
                        <LuInbox />
                        <p className='ml-1 mr-[100px]'>Products</p>
                        {clickDown? <FaAngleUp />:<FaAngleDown />}
                    </button>
                    <div className={` ml-5 overflow-hidden transition-all duration-700 ${clickDown ? 'h-[120px]':'h-[0px]'} `} >
                          {
                           yearData.map((item,idx)=>(
                            <Link to='/' state={{ data:item }} >
                                <button className='flex items-center w-[100%] text-center text-sm p-2 hover:bg-[#ede9fe] hover:rounded-xl hover:text-blue-700'>
                                    <SlCalender />
                                    <p className='ml-1 mr-[100px]'>{item}</p>
                                    <FaArrowRight />
                                </button>
                            </Link>
                           ))
                          }
                            
                        </div>
                </div>
                <hr className='mt-12' />
                <div className='pt-8'>
                    <button className='flex items-center w-[100%] text-center text-md p-2 hover:bg-[#ede9fe] hover:rounded-xl hover:text-blue-700'>
                        <IoIosNotificationsOutline />
                        <p className='ml-1 mr-[80px]'>Notifications</p>
                    </button>
                    <button className='flex items-center w-[100%] text-center text-md p-2 hover:bg-[#ede9fe] hover:rounded-xl hover:text-blue-700'>
                        <CiSettings />
                        <p className='ml-1 mr-[80px]'>Settings</p>
                    </button>
                    <button className='flex items-center w-[100%] text-center text-md p-2 hover:bg-[#ede9fe] hover:rounded-xl hover:text-blue-700'>
                        <IoIosInformationCircleOutline />
                        <p className='ml-1 mr-[80px]'>Support</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar