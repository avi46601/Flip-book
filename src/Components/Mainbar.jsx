import React from 'react'
import { IoSearch } from "react-icons/io5";
import Img from '../assets/magzine.jpg'
import { useLocation } from 'react-router-dom';
const Mainbar = () => {
    const data = [{number: 1,imgsrc: Img },{number: 1,imgsrc: Img },{number: 1,imgsrc: Img },{number: 1,imgsrc: Img },{number: 1,imgsrc: Img },{number: 1,imgsrc: Img }]
    const { state } = useLocation();
    return (
        <div className='w-[100%] bg-slate-100'>
            <div className='mt-9 mb-7 mx-14 flex justify-between'>
                <h2 className='text-2xl font-bold mx-20'> Magazine <span className='text-red-800'>{state.month}</span></h2>
                <div className='bg-white sm:w-[500px] w-[200px] h-9 rounded-lg py-1'>
                    <input className='w-[95%] px-2' type="text" placeholder='Search Page' />
                    <button ><IoSearch /></button>
                </div>
            </div>
            <div className='flex flex-wrap justify-center gap-7 px-10'>
                {
                    data.map((item, idx) => (
                        <div className='h-[300px] w-[300px]' >
                            <h2>Page {item.number}</h2>
                            <img className='mt-3' src={item.imgsrc} alt="pic" />
                            <button type='file' className='bg-white hover:bg-[#ede9fe] hover:text-blue-700 w-[100%] py-1 rounded-b-lg'>Update</button>
                        </div>
                    ))
                }

            </div>
            <div className='text-center mt-10'>
                <button className='w-[150px] p-2 bg-slate-400 hover:bg-slate-700 hover:text-white rounded-md'>View More</button>
            </div>
        </div>
    )
}

export default Mainbar