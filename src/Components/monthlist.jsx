import React from 'react'
import Img from '../assets/month.jpg'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
const Monthlist = () => {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const { state } = useLocation();
    return (
        <>
        <Sidebar/>
        <div className='w-[100%] '>
            
            <h1 className='text-center mx-6 my-[30px] text-[30px] font-bold'>Magazine <span className='text-red-800'>{state?.data ?? '2024'}</span> </h1>
            <div className='flex flex-wrap justify-center gap-7 px-10'>
                {
                    month.map((item, index) => (
                        <Link to='/month' state={{ month:item }} >
                         <button>
                            <div className='h-[220px] w-[300px] relative text-center transition-all ease-out  hover:delay-100 hover:font-black'>
                                <img className='absolute rounded-xl ' src={Img} alt="img" />
                                <h2 className='absolute w-[100%] text-2xl leading-[220px] text-bold text-white' key={index}>{item}</h2>
                            </div>
                        </button>
                        </Link>
                       
                    ))
                }
            </div>
        </div>
        </>
        
    )
}

export default Monthlist