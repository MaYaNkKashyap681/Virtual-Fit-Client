import React from 'react'
import logo from './../assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className='h-[4rem] w-full flex items-center justify-between px-12 border-b-[4px] border-gray-800 border-double bg-gradient-to-r from-gray-800 to-black'>
                <div>
                    <img src={logo} alt="brand logo" />
                </div>
                <div>
                    <Link to = {'dimension'}>
                        <span className='text-white font-bold bg-blue-400 px-2 py-1 text-sm rounded-xl'>Check Your Body Dimension</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar