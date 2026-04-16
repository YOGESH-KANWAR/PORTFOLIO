import React from "react";

export default function Experience() {
    return (
        <section id="experience" className="px-6 md:px-16 py-24 bg-[#111118] text-white">

            {/* Heading */}
            <div className="flex items-center gap-3 text-[11px] tracking-[2px] uppercase mb-3 text-[#00ff88]">
        // career
                <span className="h-px w-20 opacity-40 bg-gradient-to-r from-[#00ff88] to-transparent"></span>
            </div>

            <h2 className="font-bold tracking-tight mb-12 text-3xl md:text-5xl">
                Experience
            </h2>

            {/* Timeline */}
            <div className="flex flex-col divide-y divide-gray-800">

                {/* 1 */}
                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 py-8 relative">
                    <div className="text-xs uppercase text-gray-400">2023 — April</div>

                    <div className="hidden md:block absolute left-[148px] top-9 w-2.5 h-2.5 rounded-full border-2 bg-purple-600 border-[#0a0a0f]"></div>

                    <div>
                        <h3 className="text-xl font-semibold mb-1">
                            Computer Technician (Hardware /Software)
                        </h3>

                        <p className="text-xs text-green-400 mb-3">
                            TechScale Solutions — Remote
                        </p>

                        <p className="text-xs text-gray-400 leading-loose">
                            Provided technical support for Computer hardware and software issues, including troubleshooting, OS installation, system upgrades,  and basic network configuration.
                        </p>

                        <div className="flex flex-wrap gap-2 mt-4">
                            <span className="tag">Computer Repaire</span>
                            <span className="tag">System Assembly</span>
                            <span className="tag">Troubleshooting</span>
                            <span className="tag">OS Installation</span>
                            <span className="tag">System Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}