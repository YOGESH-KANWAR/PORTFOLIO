import { useEffect } from "react";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import Experience from "./Experience";
import Education from "./Education";
import Resume from "./Resume";
export default function Home() {
    useEffect(() => {
        // cursor glow
        const glow = document.getElementById("cursorGlow");
        const move = (e) => {
            if (glow) {
                glow.style.left = e.clientX + "px";
                glow.style.top = e.clientY + "px";
            }
        };
        document.addEventListener("mousemove", move);

        // scroll reveal
        const elements = document.querySelectorAll(".reveal");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) e.target.classList.add("active");
                });
            },
            { threshold: 0.1 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => {
            document.removeEventListener("mousemove", move);
        };
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <div className="bg-[#0a0a0f] text-gray-100 overflow-x-hidden">

            {/* CURSOR GLOW */}
            <div
                id="cursorGlow"
                className="fixed pointer-events-none w-72 h-72 rounded-full -translate-x-1/2 -translate-y-1/2 z-50"
                style={{
                    background:
                        "radial-gradient(circle, rgba(124,58,237,0.1), transparent)",
                }}
            />

            {/* ================= HERO ================= */}
            <section
                id="home"
                className="min-h-screen flex items-center px-4 sm:px-6 md:px-16 pt-24 md:pt-32 relative overflow-hidden"
            >
                {/* GRID */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.05)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] animate-grid"></div>

                <div className="relative z-10 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">

                    {/* LEFT CONTENT */}
                    <div className="max-w-3xl text-center md:text-left">

                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-[10px] sm:text-xs border border-green-400 text-green-400">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            Available for work
                        </div>

                        <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-extrabold leading-tight">
                            Full-Stack <br />
                            <span className="text-purple-500">MERN</span> <br />
                            <span className="text-green-400">Developer.</span>
                        </h1>

                        <p className="mt-4 text-gray-400 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
                            Building scalable web applications with modern tech stack.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
                            <Link
                                to="/Projects"
                                className="bg-green-400 text-black px-6 py-3 text-xs sm:text-sm font-bold hover:scale-105 transition"
                            >
                                View Projects →
                            </Link>

                            <Link
                                to="/Contact"
                                className="border px-6 py-3 text-xs sm:text-sm hover:border-green-400 hover:text-green-400 transition"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex flex-col items-center">

                        {/* PROFILE IMAGE */}
                        <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-[0_0_40px_rgba(124,58,237,0.5)] hover:scale-105 transition duration-500">
                            <img
                                src="/myProfile(3).jpg"
                                alt="profile"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* NAME */}
                        <h2 className="mt-5 text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide 
    bg-gradient-to-r from-green-400 via-purple-500 to-green-400 
    text-transparent bg-clip-text 
    relative group cursor-pointer transition duration-300 hover:scale-110">

                            Yogesh Kanwar

                            {/* Animated Underline */}
                            <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gradient-to-r from-green-400 to-purple-500 transition-all duration-500 group-hover:w-full rounded-full"></span>

                            {/* Glow Effect on Hover */}
                            <span className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 bg-purple-500 transition duration-500 -z-10"></span>
                        </h2>

                        {/* Glow Effect */}
                        <div className="absolute top-0 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full blur-2xl bg-purple-500 opacity-20 -z-10"></div>
                    </div>

                </div>
            </section>

            {/* ================= Resume ================= */}
            <Resume />

            {/* ================= SKILLS ================= */}
            <Skills />

            {/* ================= PROJECTS ================= */}
            <Projects />

            {/* ================= Experience ================= */}
            <Experience />

            {/* ================= Education ================= */}
            <Education />

            {/* ================= CONTACT ================= */}
            <Contact />
        </div>
    );
}   