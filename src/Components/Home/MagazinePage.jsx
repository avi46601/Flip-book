import React from 'react';
import './MagazinePage.css';
import p4 from "../../assets/images/p4.jpg";


const MagazinePage = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 s:grid-cols-1 bg-rose-300">
                <div className="col-span-1 md:col-span-8 sm:grid-cols-1">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-6 gap-8">
                        <div className="h-150 w-40">
                        <img src={p4} alt="" />
                        </div>

                        <div className="h-150 w-40">
                            <img src={p4} alt="" />
                        </div>

                        <div className="h-150 w-40">
                        <img src={p4} alt="" />
                        </div>
                        <div className="h-150 w-40">
                        <img src={p4} alt="" />
                        </div>
                        <div className="h-150 w-40">
                        <img src={p4} alt="" />
                        </div>
                        <div className="h-150 w-40">
                        <img src={p4} alt="" />
                        </div>
                    </div>
                </div>



                <div className="col-span-1 md:col-span-4">
                    <div className="h-screen shadow-lg bg-white heading flex flex-col justify-center items-center">
                        <h1 id='h1' className="text-2xl md:text-4xl">Image to PDF options</h1>
                        <div className="input mb-6">
                            <label htmlFor="input" className="label">Title:</label>
                            <input type="text" placeholder="Title" id="input" className="w-full md:w-60 lg:w-80 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                        </div>


                        <div className="button flex flex-col md:flex-row">
                            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 md:mb-0 md:me-2 w-full md:w-40">Reject</button>
                            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 w-full md:w-40">Accept</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MagazinePage;
