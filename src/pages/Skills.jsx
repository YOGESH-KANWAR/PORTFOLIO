import React from "react";

export default function Skills() {

    const skillData = {
        frontend: [
            { name: "React.js", level: "90%" },
            { name: "HTML5", level: "85%" },
            { name: "CSS3", level: "80%" },
            { name: "JavaScript", level: "75%" },
        ],
        backend: [
            { name: "Node.js", level: "88%" },
            { name: "Express.js", level: "85%" },
            { name: "REST API", level: "80%" },
        ],
        database: [
            { name: "MongoDB", level: "90%" },
            { name: "Mongoose", level: "85%" },
        ],
        auth: [
            { name: "JWT Auth", level: "85%" },
            { name: "Session Management", level: "75%" },
            { name: "Role-based Access", level: "80%" },
        ],
        tools: [
            { name: "Git & GitHub", level: "90%" },
            { name: "VS Code", level: "75%" },
            { name: "Postman", level: "70%" },
        ],
    };

    const renderSkills = (title, skills) => (
        <div className="group p-6 border border-gray-700 bg-[#111118] rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_#00ff88]">

            {/* Category Title */}
            <h3 className="text-xl font-bold mb-6 text-green-400 group-hover:text-white transition">
                {title}
            </h3>

            {/* Skills */}
            <div className="space-y-5">
                {skills.map((skill, i) => (
                    <div key={i}>

                        <div className="flex justify-between text-sm mb-1">
                            <span>{skill.name}</span>
                            <span className="text-gray-400">{skill.level}</span>
                        </div>

                        <div className="w-full h-2 bg-gray-700 rounded overflow-hidden">
                            <div
                                className="h-full bg-green-400 rounded transition-all duration-700 group-hover:bg-green-300"
                                style={{ width: skill.level }}
                            ></div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );

    return (
        <section id="skills" className="px-8 md:px-16 py-24 bg-[#111118] text-white">

            {/* Heading */}
            <div className="mb-12">
                <p className="text-green-400 text-xs tracking-widest uppercase mb-2">
                    // Tech Stack
                </p>
                <h2 className="text-3xl md:text-5xl font-extrabold">
                    Skills & Technologies
                </h2>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {renderSkills("Frontend", skillData.frontend)}
                {renderSkills("Backend", skillData.backend)}
                {renderSkills("Database", skillData.database)}
                {renderSkills("Auth & Security", skillData.auth)}
                {renderSkills("Tools", skillData.tools)}

            </div>

        </section>
    );
}