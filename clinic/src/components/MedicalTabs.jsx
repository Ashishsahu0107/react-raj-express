import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  {
    id: 1,
    title: "Neurology",
    heading: "Neurological Sciences Department",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Surgery",
    heading: "Surgery Department",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Dental Care",
    heading: "Dental Care Department",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Ophthalmology",
    heading: "Ophthalmology Department",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Cardiology",
    heading: "Cardiology Department",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop",
  },
];

const departments = [
  {
    id: 1,
    title: "Cardiology",
    desc: "Comprehensive heart care with advanced diagnostic tools and expert cardiologists.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Neurology",
    desc: "Advanced treatment for neurological disorders with cutting-edge technology.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Orthopedics",
    desc: "Expert bone and joint care offering comprehensive treatment solutions.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Pediatrics",
    desc: "Specialized medical care for infants, children, and adolescents.",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Dermatology",
    desc: "Complete skin care services for healthy and beautiful skin.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Oncology",
    desc: "Comprehensive cancer care with advanced treatment options.",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1200&auto=format&fit=crop",
  },
];

const MedicalSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="bg-[#f5f5f5]">

      {/* ================= TABS SECTION ================= */}
      <section className="max-w-7xl mx-auto py-20 px-4">

        {/* Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-5 overflow-hidden rounded-md bg-[#ececec]">

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`relative py-6 text-sm md:text-base font-semibold transition-all duration-300
                
                ${
                  activeTab.id === tab.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
            >
              {tab.title}

              {activeTab.id === tab.id && (
                <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-blue-600" />
              )}
            </button>
          ))}
        </div>

        {/* Animated Content */}
        <motion.div
          key={activeTab.id}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
          }}
          className="mt-12 bg-white rounded-3xl shadow-lg p-8 lg:p-14 flex flex-col lg:flex-row gap-12 items-center"
        >

          {/* Left */}
          <div className="flex-1">

            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              {activeTab.heading}
            </h2>

            <p className="text-gray-500 leading-8 mb-10 max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">

              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl">
                  🧠
                </div>

                <div>
                  <h4 className="font-bold text-lg">
                    Brain Monitoring
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    Duis aute irure dolor in reprehenderit.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl">
                  ⚕️
                </div>

                <div>
                  <h4 className="font-bold text-lg">
                    EEG Testing
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    Excepteur sint occaecat cupidatat non proident.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl">
                  🩺
                </div>

                <div>
                  <h4 className="font-bold text-lg">
                    Medical Exam
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    Sed ut perspiciatis unde omnis iste natus.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl">
                  💊
                </div>

                <div>
                  <h4 className="font-bold text-lg">
                    Treatment Plans
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    At vero eos et accusamus et iusto odio.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right */}
          <div className="flex-1 flex justify-center">

            <img
              src={activeTab.image}
              alt={activeTab.title}
              className="w-full max-w-md h-[500px] object-cover rounded-2xl shadow-md"
            />
          </div>
        </motion.div>
      </section>

      {/* ================= DEPARTMENTS CARDS ================= */}
      <section className="max-w-7xl mx-auto pb-20 px-4">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {departments.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
                  ➜
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-500 leading-7 text-sm mb-6">
                  {item.desc}
                </p>

                <button className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300">
                  Learn More
                  <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MedicalSection;