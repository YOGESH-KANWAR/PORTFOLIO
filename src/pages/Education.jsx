import React from "react";

export default function Education() {
    const educationData = [
        {
            year: "2020",
            title: "Bachelor of Art (BA)",
            institute: "Govt Science College, Durg (C.G)",
            desc: "I am to hardworking, eager to learn, and looking for opportunitive to gain experience and grow professionally",
        },
        {
            year: "2020",
            title: "Diploma in Computer Science Engineering",
            institute: "Bharti College Durg",
            desc: "Focused on web development, databases, and software engineering fundamentals.",
        },

    ];

    return (
        <section id="education" className="px-8 md:px-16 py-24 bg-[#0a0a0f] text-white">

            {/* Heading */}
            <div className="mb-12">
                <p className="text-green-400 text-xs tracking-widest uppercase mb-2">
                    // education
                </p>
                <h2 className="text-3xl md:text-5xl font-extrabold">
                    My Education
                </h2>
            </div>

            {/* Timeline */}
            <div className="relative border-l border-gray-700 pl-6 space-y-10">

                {educationData.map((edu, i) => (
                    <div
                        key={i}
                        className="group relative p-6 bg-[#111118] border border-gray-800 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_#00ff88]"
                    >

                        {/* Dot */}
                        <div className="absolute -left-[34px] top-6 w-3 h-3 rounded-full bg-green-400 border-2 border-[#0a0a0f]"></div>

                        {/* Year */}
                        <p className="text-xs text-gray-400 mb-2">
                            {edu.year}
                        </p>

                        {/* Title */}
                        <h3 className="text-lg font-bold mb-1 group-hover:text-green-400 transition">
                            {edu.title}
                        </h3>

                        {/* Institute */}
                        <p className="text-sm text-green-400 mb-2">
                            {edu.institute}
                        </p>

                        {/* Description */}
                        <p className="text-xs text-gray-400 leading-loose">
                            {edu.desc}
                        </p>

                        {/* Top hover line */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-green-400 scale-x-0 group-hover:scale-x-100 transition origin-left"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}