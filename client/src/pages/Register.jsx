import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faUser } from "@fortawesome/free-solid-svg-icons";


const Register = () => {
    return (
        <>
            <div className='relative '>
                <div className=''>
                    <img src="login.png" alt="" className="h-[90vh]  w-[100%] object-cover" />
                </div>
                <div>
                    <div className="absolute sm:left-30 sm:top-[4%] lg:top-[11%] top-[6%] left-[6%] bg-white sm:p-8 p-5 grid gap-4 sm:w-110 w-80 rounded-2xl">
                        <div>
                            <h1 className='text-3xl text-center font-bold text-[#C2410C]'>Welcome Back</h1>
                            <p className='text-center text-gray-500 '>Register to your Cravings account</p>
                        </div>
                        <div className='grid gap-2 '>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="" id="email" placeholder='Enter your Email' className='py-2 px-1 border border-[#C2410C] rounded focus:shadow-orange-500 focus:outline-[#C2410C] focus:outline-2'/>
                        </div>
                        <div className='grid gap-2  relative'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="" id="password" placeholder='Enter your password' className='py-2 px-1 border border-[#C2410C] rounded focus:shadow-orange-500 focus:outline-[#C2410C] focus:outline-2' />
                            <FontAwesomeIcon icon={faEye} className='absolute right-2 top-[46px] text-gray-400'/>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-1'>
                                <input type="checkbox" name="" id="remember" />
                                <label htmlFor="remember">Rember me</label>
                            </div>
                            <a href="" className='text-[#C2410C] hover:underline'>Forgot Password?</a>
                        </div>
                        <button type="submit" class="w-full py-3 bg-[#C2410C] hover:cursor-pointer text-white font-semibold rounded-md hover:bg-orange-700 mb-4 disabled:opacity-50">Login</button>
                        <div class="flex justify-center items-center gap-2 text-gray-500">
                            <hr className='w-23' />
                            <span>Don't have an account?</span>
                            <hr className='w-23' />
                        </div>
                        <a href="" className=' text-center text-[#C2410C] hover:underline '>Create an account</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;