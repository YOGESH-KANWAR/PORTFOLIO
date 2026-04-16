import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="px-6 md:px-16 py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400 bg-[#0a0a0f]">

            {/* Left */}
            <div>
                © {new Date().getFullYear()} — MERN Stack Developer. Crafted with ❤️
            </div>

            {/* Center */}
            <div className="opacity-60 text-center">
                React · Node · MongoDB · Express · Tailwind
            </div>

            {/* Right (Icons) */}
            <div className="flex gap-5 text-lg">

                <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"
                    className="hover:text-green-400 transition">
                    <FaGithub />
                </a>

                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"
                    className="hover:text-green-400 transition">
                    <FaLinkedin />
                </a>

                <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer"
                    className="hover:text-green-400 transition">
                    <FaTwitter />
                </a>

            </div>

        </footer>
    );
}