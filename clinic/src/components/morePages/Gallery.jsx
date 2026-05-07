import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
    return (
        <>
            <section className="bg-[#f3f4f6] min-h-screen flex items-start justify-center pt-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl font-bold text-slate-900 mb-6">
                        Gallery
                    </h1>

                    <p className="text-gray-600 text-lg leading-9 max-w-3xl mx-auto">
                        Odio et unde deleniti. Deserunt numquam exercitationem.
                        Officiis quo odio sint voluptas consequatur ut a odio
                        voluptatem. Sit dolorum debitis veritatis natus dolores.
                        Quasi ratione sint. Sit quaerat ipsum dolorem.
                    </p>
                </div>
            </section>
            <section className="bg-[#f3f4f6] border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex items-center gap-3 text-lg">
                        <Link
                            to="/"
                            className="text-blue-600 hover:text-blue-700 transition"
                        >
                            Home
                        </Link>

                        <span className="text-gray-400">/</span>

                        <span className="text-slate-700 font-medium">
                            {title}
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;