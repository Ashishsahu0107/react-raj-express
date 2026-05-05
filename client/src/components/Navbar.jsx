import React from 'react'
import { Link } from 'react-router-dom';
import { ToggleSwitch } from "../projects/ToggleSwitch";

const Navbar = () => {

    return (
        <>
            <nav className='bg-[#C2410C] position-sticky top-0 w-100wh sticky top-0 z-99 flex items-center justify-between px-12 py-1 text-black w-full h-16 shadow-md'>
                <Link to="/">
                    <img src="logo.png" alt="" className='h-16' />
                </Link>
                <div>
                    {ToggleSwitch()}
                </div>   
                <div className='flex gap-5'>
                    <Link to="/login" className='text-white'>
                        Login
                    </Link>
                    <Link to="/register" className='bg-white px-4 py-1 rounded text-[#C2410C] hover:text-white hover:bg-transparent hover:outline'>
                        Register
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;