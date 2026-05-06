import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaXTwitter,
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";

const Topbar = () => {
    return (
        <>
            <div className="bg-blue-600 text-white px-6 py-3">
                <div className="max-w-7xl mx-auto flex items-center justify-between">

                    {/* Left */}
                    <div className="flex items-center gap-8 text-sm">

                        <div className="flex items-center gap-2">
                            <MdEmail className="text-lg" />
                            <p>contact@example.com</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <FiSmartphone className="text-lg" />
                            <p>+1 5589 55488 55</p>
                        </div>

                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-5 text-lg">
                        <FaXTwitter className="cursor-pointer hover:text-gray-200" />
                        <FaFacebook className="cursor-pointer hover:text-gray-200" />
                        <FaInstagram className="cursor-pointer hover:text-gray-200" />
                        <FaLinkedin className="cursor-pointer hover:text-gray-200" />
                    </div>

                </div>
            </div>

        </>
    );
}

export default Topbar