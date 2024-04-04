import React from 'react'
import { IoSearch } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import imageLinks from '../../public/image';
import { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Sidebar from './Sidebar';
const Mainbar = () => {
    const { state } = useLocation();
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 8;

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = imageLinks.slice(indexOfFirstImage, indexOfLastImage);

    const totalPages = Math.ceil(imageLinks.length / imagesPerPage);

    const nextPage = () => {
        setCurrentPage(prevPage => (prevPage === totalPages ? prevPage : prevPage + 1));
    };

    const prevPage = () => {
        setCurrentPage(prevPage => (prevPage === 1 ? prevPage : prevPage - 1));
    };
    return (
        <>
        <Sidebar />
        <div className='w-[100%] bg-slate-100 '>
            <div className='mt-9 mb-7 mx-14 flex justify-between'>
                <h2 className='text-2xl font-bold mx-20'> Magazine <span className='text-red-800'>{state.month}</span></h2>
                <div className='bg-white sm:w-[500px] w-[200px] h-9 rounded-lg py-1 flex'>
                    <input className='w-[95%] px-2 focus:outline-none items-center' type="text" placeholder='Search Page' />
                    <button className='mt-1' ><IoSearch size={'20px'} /></button>
                </div>
            </div>
            <div className='flex flex-wrap justify-center gap-7 px-10'>
                {
                    currentImages.map((item, idx) => (
                        <div className='h-[350px] w-[300px]' >
                            <h2 className='inline'>Page {(currentPage-1)*8+idx + 1}</h2>
                            <img className=' h-[300px] w-[300px]' src={item} alt="pic" />
                            <button type='file' className='bg-white hover:bg-[#ede9fe] hover:text-blue-700 w-[100%] py-1 rounded-b-lg'>Update</button>
                        </div>
                    ))
                }

            </div>
            <div className='w-[100%] items-center flex justify-center gap-5 mt-[45px]'>
                <button onClick={prevPage} disabled={currentPage === 1}>
                <FaArrowAltCircleLeft size={"30px"}/>
                </button>
                <button onClick={nextPage} disabled={currentPage === totalPages}>
                <FaArrowAltCircleRight size={"30px"} />
                </button>
            </div>
            {/* <div className='text-center mt-10'>
                <button className='w-[150px] p-2 bg-slate-400 hover:bg-slate-700 hover:text-white rounded-md'>View More</button>
            </div> */}
        </div>
        </>
        
    )
}

export default Mainbar