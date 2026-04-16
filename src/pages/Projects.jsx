const projects = [
    {
        id: 1,
        title: "E-Shop Website",
        desc: "Full stack MERN app with payment integration, admin dashboard and authentication.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    },

    {
        id: 3,
        title: "Portfolio Website",
        desc: "Modern responsive portfolio with animations and clean UI.",
        tech: ["React", "Tailwind"],
    },

];

export default function Projects() {
    return (

        <section id="projects" className="min-h-screen bg-[#0a0a0f] text-gray-100 px-6 md:px-16 py-20">

            {/* Heading */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold">
                    My <span className="text-green-400">Projects</span>
                </h1>
                <p className="text-gray-400 mt-4">
                    Some of my recent work 🚀
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="border border-gray-700 p-6 hover:border-green-400 transition-all hover:-translate-y-2 bg-[#111118]"
                    >

                        {/* Title */}
                        <h2 className="text-xl font-bold mb-3">
                            {project.title}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-400 text-sm mb-4">
                            {project.desc}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech, index) => (
                                <span
                                    key={index}
                                    className="text-xs px-2 py-1 border border-gray-600 text-gray-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-between items-center">
                            <button className="text-green-400 text-sm hover:underline">
                                Live Demo →
                            </button>
                            <button className="text-gray-400 text-sm hover:text-white">
                                GitHub →
                            </button>
                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}