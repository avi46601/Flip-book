import React from 'react'
import Img from '../assets/month.jpg'
const Monthlist = () => {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        <div className='w-[100%]'>
            <h1 className='text-center mx-6 my-[30px] text-lg font-bold'>Magazine 2024</h1>
            <div className='flex flex-wrap justify-center gap-7 px-10'>
                {
                    month.map((item, index) => (
                        <button>
                            <div className='h-[220px] w-[300px] relative'>
                                <img className='absolute' src={Img} alt="img" />
                                <h2 className='absolute text-xl text-bold text-white inset-0 mt-[30%]' key={index}>{item}</h2>
                            </div>
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Monthlist