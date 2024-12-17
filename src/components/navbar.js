import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-custom-gray p-4">
            <div className="container mx-auto flex flex-col items-center">
                <ul className="flex space-x-12 list-none p-0 m-0 mt-4">
                    <li className="text-white transform transition-transform duration-200 hover:scale-105 shadow-md hover:shadow-lg">
                        <Link to="/" className="hover:text-gray-400">home</Link>
                    </li>
                    <li className="text-white transform transition-transform duration-200 hover:scale-105 shadow-md hover:shadow-lg">
                        <Link to="/about" className="hover:text-gray-400">about</Link>
                    </li>
                    {/* <li className="text-white transform transition-transform duration-200 hover:scale-105 shadow-md hover:shadow-lg">
                        <Link to="/services" className="hover:text-gray-400">Services</Link>
                    </li> */}
                    <li className="text-white transform transition-transform duration-200 hover:scale-105 shadow-md hover:shadow-lg">
                        <Link to="/blog" className="hover:text-gray-400">blog</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;