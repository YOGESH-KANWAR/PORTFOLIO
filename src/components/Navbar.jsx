import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
        setOpen(false); // 👈 auto close mobile menu
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur border-b border-gray-800">

            {/* CONTAINER */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">

                {/* LOGO */}
                <h1 className="text-green-400 font-bold text-lg tracking-wide">
                    &lt;Portfolio /&gt;
                </h1>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex items-center gap-8 text-sm">
                    <button onClick={() => scrollToSection("home")} className="nav-link text-white cursor-pointer transition duration-300 hover:scale-110 hover:text-green-400" >Home</button>
                    <button onClick={() => scrollToSection("resume")} className="nav-link text-white cursor-pointer transition duration-300 hover:scale-110 hover:text-green-400">Resume</button>
                    <button onClick={() => scrollToSection("skills")} className="nav-link text-white cursor-pointer transition duration-300 hover:scale-110 hover:text-green-400">Skills</button>
                    <button onClick={() => scrollToSection("projects")} className="nav-link text-white cursor-pointer transition duration-300 hover:scale-110 hover:text-green-400">Projects</button>
                    <button onClick={() => scrollToSection("experience")} className="nav-link text-white cursor-pointer transition duration-300 hover:scale-110 hover:text-green-400">Experience</button>
                    <button onClick={() => scrollToSection("education")} className="nav-link text-white cursor-pointer transition duration-300 hover:scale-110 hover:text-green-400">Education</button>
                    <button onClick={() => scrollToSection("contact")} className="nav-link text-white cursor-pointer transition duration-300 hover:scale-110 hover:text-green-400">Contact</button>
                </div>

                {/* DESKTOP BUTTON */}
                <div className="hidden md:block">
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="btn-primary"
                    >
                        Hire Me
                    </button>
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white text-2xl"
                >
                    {open ? "✖" : "☰"}
                </button>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`md:hidden bg-[#0a0a0f] border-t border-gray-800 flex flex-col items-start text-sm overflow-hidden transition-all duration-300 ${open ? "max-h-[500px] py-6 px-6" : "max-h-0"
                    }`}
            >
                <button onClick={() => scrollToSection("home")} className="nav-link w-full text-left py-2">Home</button>
                <button onClick={() => scrollToSection("resume")} className="nav-link w-full text-left py-2">Resume</button>
                <button onClick={() => scrollToSection("skills")} className="nav-link w-full text-left py-2">Skills</button>
                <button onClick={() => scrollToSection("projects")} className="nav-link w-full text-left py-2">Projects</button>
                <button onClick={() => scrollToSection("experience")} className="nav-link w-full text-left py-2">Experience</button>
                <button onClick={() => scrollToSection("education")} className="nav-link w-full text-left py-2">Education</button>
                <button onClick={() => scrollToSection("contact")} className="nav-link w-full text-left py-2">Contact</button>

                <button
                    onClick={() => scrollToSection("contact")}
                    className="btn-primary w-full mt-4"
                >
                    Hire Me
                </button>
            </div>        </nav>
    );
}