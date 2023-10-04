import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='border-b-4 py-4 border-black-700 text-center fixed top-0  font-bold w-full text-lg text-white' style={{ 'background':'#232F3E'}}>
            <ul>
                <li className='inline-block py-1 px-3 mx-2 rounded-lg' >
                    <Link to='/' className='pl-6 pr-8 py-2 hover:bg-blue-100 hover:text-black rounded-lg'>
                        Home
                    </Link>
                </li>
                <li className='inline-block py-1 px-3 mx-2 rounded-lg' >
                    <Link to='/about' className='pl-6 pr-8 py-2 hover:bg-blue-100 hover:text-black rounded-lg'>
                        About
                    </Link>
                </li>
                <li className='inline-block py-1 px-3 mx-2 rounded-lg ' >
                    <Link to='/articles-list' className='pl-6 pr-8  py-2 hover:bg-blue-100 hover:text-black rounded-lg'>
                        Articles 
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
