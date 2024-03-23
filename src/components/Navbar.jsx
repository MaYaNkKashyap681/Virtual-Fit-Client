import React from 'react'
import logo from './../assets/logo.svg';

const Navbar = () => {
    return (
        <nav>
            <div className='h-[4rem] w-full flex items-center px-12 border-b-[4px] border-gray-800 border-double bg-gradient-to-r from-gray-800 to-black'>
                <div>
                    <img src={logo} alt="brand logo" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar