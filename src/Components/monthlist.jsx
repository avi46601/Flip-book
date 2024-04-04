import React from 'react'
import Img from '../assets/month.jpg'
const Monthlist = () => {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        <div className='w-[100%] '>
            <h1 className='text-center mx-6 my-[30px] text-xl font-bold'>Magazine 2024</h1>
            <div className='flex flex-wrap justify-center gap-7 px-10'>
                {
                    month.map((item, index) => (
                        <button>
                            <div className='h-[220px] w-[300px] relative text-center transition-all ease-out  hover:delay-100 hover:font-black'>
                                <img className='absolute rounded-xl ' src={Img} alt="img" />
                                <h2 className='absolute w-[100%] text-2xl leading-[220px] text-bold text-white' key={index}>{item}</h2>
                            </div>
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Monthlist