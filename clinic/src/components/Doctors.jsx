import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
    CalendarDays,
    Building2,
} from "lucide-react";

import {
    FaLinkedinIn,
    FaTwitter,
    FaFacebookF,
} from "react-icons/fa";

const doctors = [
    {
        id: 1,
        name: "Dr. Marcus Johnson",
        specialty: "Cardiologist",
        experience: "15+ Years Experience",
        department: "Cardiology Dept.",
        image:
            "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 2,
        name: "Dr. Sarah Williams",
        specialty: "Neurologist",
        experience: "12+ Years Experience",
        department: "Neurology Dept.",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 3,
        name: "Dr. Michael Chen",
        specialty: "Orthopedic Surgeon",
        experience: "18+ Years Experience",
        department: "Orthopedics Dept.",
        image:
            "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 4,
        name: "Dr. Emily Rodriguez",
        specialty: "Pediatrician",
        experience: "10+ Years Experience",
        department: "Pediatrics Dept.",
        image:
            "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 5,
        name: "Dr. David Thompson",
        specialty: "Dermatologist",
        experience: "14+ Years Experience",
        department: "Dermatology Dept.",
        image:
            "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 6,
        name: "Dr. Lisa Anderson",
        specialty: "Oncologist",
        experience: "16+ Years Experience",
        department: "Oncology Dept.",
        image:
            "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 7,
        name: "Dr. Robert Martinez",
        specialty: "Emergency Medicine",
        experience: "11+ Years Experience",
        department: "Emergency Dept.",
        image:
            "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 8,
        name: "Dr. Jennifer Lee",
        specialty: "Radiologist",
        experience: "13+ Years Experience",
        department: "Radiology Dept.",
        image:
            "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
    },
];

const Doctors = () => {
    return (
        <div className="bg-white min-h-screen">

            {/* ================= HERO ================= */}
            <section className="py-14 px-4">

                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <div className="max-w-4xl mx-auto text-center mb-20">

                        <motion.h1
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                type: "spring",
                                stiffness: 80,
                            }}
                            className="text-5xl md:text-6xl font-bold text-slate-900 mb-8"
                        >
                            Doctors
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                            }}
                            className="text-gray-500 text-lg leading-9 max-w-2xl mx-auto"
                        >
                            Meet our experienced and compassionate medical specialists
                            dedicated to delivering world-class healthcare services.
                        </motion.p>
                    </div>
                </div>

                {/* Breadcrumb */}
                <div className="bg-[#F7F8F8] py-5 px-4 rounded-xl">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 text-lg max-w-7xl mx-auto"
                    >
                        <Link
                            to="/"
                            className="text-blue-600 font-medium hover:text-blue-700 transition"
                        >
                            Home
                        </Link>

                        <span className="text-gray-400">/</span>

                        <span className="text-slate-700 font-medium">
                            Doctors
                        </span>
                    </motion.div>
                </div>
            </section>

            {/* ================= DOCTORS GRID ================= */}
            <section className=" py-10 px-4">

                <div className="max-w-7xl mx-auto">

                    {/* Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {doctors.map((doctor, index) => (
                            <motion.div
                                key={doctor.id}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 70,
                                }}
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.3 },
                                }}
                                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group"
                            >

                                {/* Top */}
                                <div className="relative flex flex-col items-center pt-10 px-6">

                                    {/* Image Wrapper */}
                                    <div className="relative">

                                        <motion.img
                                            whileHover={{ scale: 1.08 }}
                                            transition={{ duration: 0.4 }}
                                            src={doctor.image}
                                            alt={doctor.name}
                                            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl"
                                        />

                                        {/* Social Icons */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            className="absolute inset-0 rounded-full bg-blue-600/75 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                        >

                                            <motion.div
                                                whileHover={{ scale: 1.2 }}
                                                className="w-9 h-9 rounded-full bg-white flex items-center justify-center cursor-pointer"
                                            >
                                                <FaLinkedinIn className="w-4 h-4 text-blue-600" />
                                            </motion.div>

                                            <motion.div
                                                whileHover={{ scale: 1.2 }}
                                                className="w-9 h-9 rounded-full bg-white flex items-center justify-center cursor-pointer"
                                            >
                                                <FaTwitter className="w-4 h-4 text-sky-500" />
                                            </motion.div>

                                            <motion.div
                                                whileHover={{ scale: 1.2 }}
                                                className="w-9 h-9 rounded-full bg-white flex items-center justify-center cursor-pointer"
                                            >
                                                <FaFacebookF className="w-4 h-4 text-blue-700" />
                                            </motion.div>
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center mt-7">

                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                            {doctor.name}
                                        </h3>

                                        <p className="text-blue-600 font-semibold mb-5">
                                            {doctor.specialty}
                                        </p>

                                        <p className="text-gray-500 text-sm leading-7 mb-7">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Sed do eiusmod tempor incididunt ut labore.
                                        </p>

                                        {/* Details */}
                                        <div className="space-y-4 text-sm text-gray-600 mb-8">

                                            <div className="flex items-center justify-center gap-2">
                                                <CalendarDays className="w-4 h-4 text-blue-600" />
                                                {doctor.experience}
                                            </div>

                                            <div className="flex items-center justify-center gap-2">
                                                <Building2 className="w-4 h-4 text-blue-600" />
                                                {doctor.department}
                                            </div>
                                        </div>

                                        {/* Button */}
                                        <motion.button
                                            whileHover={{
                                                scale: 1.05,
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 mb-8"
                                        >
                                            Book Appointment
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Doctors;