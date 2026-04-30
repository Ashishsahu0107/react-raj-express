import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='bg-[#C2410C] position-sticky top-0 w-100wh sticky top-0 z-99 flex items-center justify-between px-12 py-1 text-white w-full h-16 shadow-md'>
                <img src="logo.png" alt="" className='w-fit h-full' />
                <div className='flex gap-5'>
                    <button className='text-white'>Login</button>
                    <button className='bg-white px-4 py-1 rounded text-[#C2410C] hover:text-white hover:bg-transparent hover:outline'>Register</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;