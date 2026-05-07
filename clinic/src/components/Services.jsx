import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Cardiology",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    desc:
      "Comprehensive heart care with advanced diagnostic tools and treatment options for cardiovascular conditions.",
    points: ["ECG Testing", "Heart Surgery"],
  },
  {
    id: 2,
    title: "Neurology",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    desc:
      "Expert neurological care for brain and nervous system disorders with state-of-the-art imaging technology.",
    points: ["MRI Scans", "Stroke Care"],
  },
  {
    id: 3,
    title: "Orthopedics",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
    desc:
      "Specialized bone and joint treatment including sports medicine and reconstructive surgery procedures.",
    points: ["Joint Replacement", "Sports Medicine"],
  },
  {
    id: 4,
    title: "Pediatrics",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1200&auto=format&fit=crop",
    desc:
      "Dedicated healthcare for children from infancy through adolescence with specialized treatment protocols.",
    points: ["Well-Child Visits", "Immunizations"],
  },
  {
    id: 5,
    title: "Emergency Care",
    image:
      "https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=1200&auto=format&fit=crop",
    desc:
      "24/7 emergency medical services with rapid response teams and critical care capabilities.",
    points: ["Trauma Center", "Critical Care"],
  },
  {
    id: 6,
    title: "Laboratory Testing",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop",
    desc:
      "Advanced diagnostic laboratory services with comprehensive testing panels and rapid result delivery.",
    points: ["Blood Tests", "Pathology"],
  },
];

const Services = () => {
  return (
    <>
      {/* Heading Section */}
      <div className="text-center mb-16 pt-20">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
        >
          Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto text-gray-500 leading-8 text-lg"
        >
          Odio et unde deleniti. Deserunt numquam exercitationem officiis quo odio
          sint voluptates consequatur ut a odio voluptatem. Sit dolorum debitis
          veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
        </motion.p>

      </div>
      <section className=" py-20 px-4 min-h-screen">

        <div className="bg-[#f6f6f6] p-5 mb-14">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm  text-gray-500">
            <span className="text-blue-600 font-medium cursor-pointer">
              Home
            </span>

            <span>/</span>

            <span className="text-slate-700 font-medium">
              Services
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
              >

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">

                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 leading-7 text-sm mb-6">
                    {service.desc}
                  </p>

                  {/* Points */}
                  <div className="flex flex-wrap gap-4 mb-8">

                    {service.points.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-slate-700"
                      >
                        <Check className="w-4 h-4 text-blue-600" />
                        {point}
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg flex items-center justify-between px-5 font-semibold transition-all duration-300">

                    Learn More

                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;