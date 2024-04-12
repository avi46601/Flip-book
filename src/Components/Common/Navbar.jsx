import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 56) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`bg-gray-100 ${isScrolled ? 'shadow-lg' : ''} fixed top-0 w-full z-10`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="text-xl font-semibold text-gray-800">PDF Converter</Link>
                    <div className="flex lg:hidden">
                        <button onClick={toggleMenu} className="text-gray-600 focus:outline-none hover:text-gray-900">
                            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M18 18H6v-2h12v2zm0-5H6v-2h12v2zm0-7H6V4h12v2z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className={`hidden lg:flex ${isMenuOpen ? 'flex  justify-between items-center' : 'hidden'}`}>
                        <Link to="/read" className="mx-3 text-gray-600 hover:text-gray-900">Read</Link>
                        <Link to="/dashboard" className="mx-3 text-gray-600 hover:text-gray-900">Dashboard</Link>
                        <Link to="/picture" className="mx-3 text-gray-600 hover:text-gray-900">Feature</Link>
                        <Link to="/signin" className="mx-3  bg-blue-500 text-white font-bold py-2 px-4 rounded ">Login</Link>
                    </div>
                </div>
            </div>
            <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link to="/read" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={toggleMenu}>Read</Link>
                    <Link to="/picture" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={toggleMenu}>Feature</Link>
                    <Link to="/signin" className="mx-3  bg-blue-500 text-white font-bold py-2 px-4 rounded ">Login</Link>
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;