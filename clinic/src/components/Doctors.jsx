import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  Building2,
  CalendarDays,
  LinkedinIcon,
  Twitter,
  Facebook,
} from "lucide-react";

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
            "https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?q=80&w=1200&auto=format&fit=crop",
    },
];


const Doctors = () => {
    return (
        <div className="bg-white min-h-screen">


            <section className="py-10 px-4 border-gray-200">
                <div className="max-w-7xl mx-auto">
                    {/* Heading */}
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl md:text-6xl font-bold text-slate-900 mb-8"
                        >
                            Doctors
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-gray-500 text-lg leading-9 max-w-2xl mx-auto" // Added max-width for better readability
                        >
                            Odio et unde deleniti. Deserunt numquam exercitationem.
                            Officiis quo odio sint voluptas consequatur ut a odio
                            voluptatem. Sit dolorum debitis veritatis natus dolores.
                            Quasi ratione sint. Sit quaerat ipsum dolorem.
                        </motion.p>
                    </div>

                </div>
                <div className="bg-[#F7F8F8] p-4">
                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }} // Added delay for smoother sequence
                        className="flex items-center  justify-start gap-3 text-lg max-w-7xl mx-auto" // Centered the breadcrumb
                    >
                        <Link to="/" className="text-blue-600 font-medium cursor-pointer hover:text-blue-700 transition-colors duration-200">
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
            <section className="bg-[#f5f7fb] py-24 px-4 min-h-screen">
                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-20">

                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl font-bold text-slate-900 mb-6"
                        >
                            Our Doctors
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="max-w-3xl mx-auto text-gray-500 leading-8 text-lg"
                        >
                            Meet our experienced and compassionate medical specialists
                            dedicated to delivering world-class healthcare services.
                        </motion.p>
                    </div>

                    {/* Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {doctors.map((doctor, index) => (
                            <motion.div
                                key={doctor.id}
                                initial={{ opacity: 0, y: 70 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                            >

                                {/* Top */}
                                <div className="relative flex flex-col items-center pt-8 px-6">

                                    {/* Image */}
                                    <div className="relative">

                                        <img
                                            src={doctor.image}
                                            alt={doctor.name}
                                            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
                                        />

                                        {/* Social Hover */}
                                        <div className="absolute inset-0 rounded-full bg-blue-600/70 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition duration-300">

                                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                                                <Linkedin className="w-4 h-4 text-blue-600" />
                                            </div>

                                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                                                <Twitter className="w-4 h-4 text-blue-500" />
                                            </div>

                                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                                                <Facebook className="w-4 h-4 text-blue-700" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="text-center mt-6">

                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                            {doctor.name}
                                        </h3>

                                        <p className="text-blue-600 font-semibold mb-5">
                                            {doctor.specialty}
                                        </p>

                                        <p className="text-gray-500 text-sm leading-7 mb-6">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Sed do eiusmod tempor incididunt ut labore.
                                        </p>

                                        {/* Details */}
                                        <div className="space-y-3 text-sm text-gray-600 mb-8">

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
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
                                            Book Appointment
                                        </button>
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