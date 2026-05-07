
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Privacy = () => {
  const [policy, setPolicy] = useState(null);

  useEffect(() => {
    import("./privacyPolicy.json").then((data) => setPolicy(data.default || data));
  }, []);

  if (!policy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-lg text-gray-500">Loading Privacy Policy...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* ================= HERO ================= */}
      <section className="py-20 px-4 border-b border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl mx-auto text-gray-500 leading-8 text-lg"
          >
            {policy.description}
          </motion.p>
        </div>
      </section>

      {/* ================= BREADCRUMB ================= */}
      <div className="bg-[#eef1f5] py-5 px-4">
        <div className="max-w-5xl mx-auto flex items-center gap-3 text-lg">
          {policy.breadcrumb.map((item, idx) => (
            <React.Fragment key={item.label}>
              {item.to ? (
                <Link
                  to={item.to}
                  className="text-blue-600 font-medium hover:text-blue-700 transition"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-700 font-medium">{item.label}</span>
              )}
              {idx < policy.breadcrumb.length - 1 && (
                <ChevronRight className="w-4 h-4 text-gray-400" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

       <section className="py-10 px-4 border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-gray-400 mb-4"
          >
            Effective Date: {policy.effectiveDate}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            {policy.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl mx-auto text-gray-500 leading-8 text-lg"
          >
            {policy.description}
          </motion.p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl p-8 md:p-14"
          >
            {policy.sections.map((section, idx) => (
              <div className="mb-16" key={section.heading}>
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {section.heading}
                  </h2>
                </div>
                {section.content &&
                  section.content.map((p, i) => (
                    <p
                      key={i}
                      className={
                        i === 0
                          ? "text-gray-600 leading-7 text-1xl"
                          : "text-gray-600 leading-7 text-1xl mt-6"
                      }
                    >
                      {p}
                    </p>
                  ))}
                {/* List rendering */}
                {section.list && (
                  <ul className="space-y-4 text-gray-600 text-lg mt-8">
                    {section.list.map((item, i) => (
                      <li key={i}>
                        <span className="text-[#175CDD]"> • </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {/* Subsections rendering */}
                {section.subsections && (
                  <div className="space-y-6 mt-8">
                    {section.subsections.map((sub, j) => (
                      <div key={sub.subheading || j}>
                        {sub.subheading && (
                          <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                            {sub.subheading}
                          </h3>
                        )}
                        {sub.content &&
                          sub.content.map((p, k) => (
                            <p key={k} className="space-y-3 text-gray-600 text-lg">
                              {p}
                            </p>
                          ))}
                        {sub.list && (
                          <ul className="space-y-3 text-gray-600 text-lg">
                            {sub.list.map((item, l) => (
                              <li key={l}>
                                <span className="text-[#175CDD]"> • </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Footer */}
            <div className="border-t border-gray-200 pt-12 mt-14">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                {policy.contact.heading}
              </h3>
              <p className="text-gray-600 text-lg leading-8 mb-10">
                {policy.contact.description}
              </p>
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-lg">
                  <span className="font-semibold text-slate-900">Email:</span>
                  <a
                    href={`mailto:${policy.contact.email}`}
                    className="text-gray-600 hover:text-blue-600 transition"
                  >
                    {policy.contact.email}
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-lg">
                  <span className="font-semibold text-slate-900">Address:</span>
                  <span className="text-gray-600">{policy.contact.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
