import React from "react";
import {
    FaShieldAlt,
    FaUsers,
    FaHeartbeat,
    FaPhoneAlt,
} from "react-icons/fa";

const SpecialistSection = () => {
    return (
        <>
            <section className="bg-[#f7f8fc] py-24">

                {/* Cards */}
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-10">

                    {/* Card 1 */}
                    <div className="bg-white border border-gray-200 rounded-3xl p-10 text-center hover:shadow-xl transition duration-300">

                        {/* Icon */}
                        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">

                            <FaShieldAlt className="text-white text-3xl" />

                        </div>

                        {/* Title */}
                        <h2 className="text-3xl font-light text-slate-900 mt-8">
                            Orthopedic Surgery
                        </h2>

                        {/* Text */}
                        <p className="text-gray-500 text-lg leading-8 mt-6">
                            Comprehensive musculoskeletal care utilizing
                            advanced arthroscopic techniques and joint
                            replacement procedures.
                        </p>

                        {/* List */}
                        <div className="mt-10 space-y-5 text-gray-600 text-lg">

                            <div className="flex items-center justify-center gap-3">
                                <span className="text-blue-600">→</span>
                                Sports Medicine
                            </div>

                            <div className="flex items-center justify-center gap-3">
                                <span className="text-blue-600">→</span>
                                Joint Replacement
                            </div>

                            <div className="flex items-center justify-center gap-3">
                                <span className="text-blue-600">→</span>
                                Spine Surgery
                            </div>

                        </div>

                        {/* Button */}
                        <button className="mt-12 text-blue-600 text-lg font-semibold hover:tracking-wider transition-all">

                            LEARN MORE

                        </button>

                    </div>

                    {/* Card 2 */}
                    <div className="bg-white border border-blue-200 rounded-3xl p-10 text-center hover:shadow-xl transition duration-300">

                        {/* Icon */}
                        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">

                            <FaUsers className="text-white text-3xl" />

                        </div>

                        {/* Title */}
                        <h2 className="text-3xl font-light text-slate-900 mt-8">
                            Pediatric Care
                        </h2>

                        {/* Text */}
                        <p className="text-gray-500 text-lg leading-8 mt-6">
                            Child-centered healthcare services from newborn
                            to adolescence with family-focused treatment
                            approaches.
                        </p>

                        {/* List */}
                        <div className="mt-10 space-y-5 text-gray-600 text-lg">

                            <div className="flex items-center justify-center gap-3">
                                <span className="text-blue-600">→</span>
                                Neonatal Intensive Care
                            </div>

                            <div className="flex items-center justify-center gap-3">
                                <span className="text-blue-600">→</span>
                                Developmental Pediatrics
                            </div>

                            <div className="flex items-center justify-center gap-3">
                                <span className="text-blue-600">→</span>
                                Pediatric Surgery
                            </div>

                        </div>

                        {/* Button */}
                        <button className="mt-12 text-blue-600 text-lg font-semibold hover:tracking-wider transition-all">

                            LEARN MORE

                        </button>

                    </div>

                    {/* Card 3 */}
                    <div className="bg-white border border-gray-200 rounded-3xl p-10 text-center hover:shadow-xl transition duration-300">

                        {/* Icon */}
                        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">

                            <FaHeartbeat className="text-white text-3xl" />

                        </div>

                        {/* Title */}
                        <h2 className="text-3xl font-light text-slate-900 mt-8">
                            Cancer Treatment
                        </h2>

                        {/* Text */}
                        <p className="text-gray-500 text-lg leading-8 mt-6">
                            Multidisciplinary oncology program offering
                            personalized cancer care with latest therapeutic
                            innovations.
                        </p>

                        {/* List */}
                        <div className="mt-10 space-y-5 text-gray-600 text-lg">

                            <div className="flex items-center justify-center gap-3">
                                <span className="text-blue-600">→</span>
                                Precision Medicine
                            </div>

                            <div className="flex items-center justify-center gap-3">
                                <span className="text-blue-600">→</span>
                                Immunotherapy
                            </div>

                            <div className="flex items-center justify-center gap-3">
                                <span className="text-blue-600">→</span>
                                Radiation Oncology
                            </div>

                        </div>

                        {/* Button */}
                        <button className="mt-12 text-blue-600 text-lg font-semibold hover:tracking-wider transition-all">

                            LEARN MORE

                        </button>

                    </div>

                </div>

                {/* Emergency Banner */}
                <div className="max-w-7xl mx-auto px-6 mt-16">

                    <div className="bg-blue-600 rounded-[25px] px-10 py-10 flex items-center justify-between">

                        {/* Left */}
                        <div>

                            <h2 className="text-white text-3xl font-light">
                                Emergency Services Available 24/7
                            </h2>

                            <p className="text-blue-100 text-lg leading-8 mt-4 max-w-3xl">
                                Our emergency department is equipped with
                                state-of-the-art technology and staffed by
                                board-certified emergency physicians ready
                                to provide immediate care.
                            </p>

                        </div>

                        {/* Right Button */}
                        <button className="bg-white hover:bg-gray-100 transition px-7 py-4 rounded-full flex items-center gap-3 text-blue-600 text-lg font-semibold whitespace-nowrap">

                            <FaPhoneAlt className="text-lg" />

                            Call Emergency: (555) 123-4567

                        </button>

                    </div>

                </div>

            </section>
        </>
    );
};

export default SpecialistSection;