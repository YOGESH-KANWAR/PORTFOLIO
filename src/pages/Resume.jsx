import React from 'react'

export default function Resume() {
    return (
        <>
            <section id="resume" className="px-8 md:px-16 py-24 bg-[#0a0a0f] text-white">

                <h2 className="font-bold tracking-tight mb-12 text-3xl md:text-5xl">
                    Resume
                </h2>

                <div className="max-w-md mx-auto">
                    <img
                        src='My-Resume.jpg'
                        alt="image"
                        className="w-full h-auto"
                    />
                </div>
            </section>
        </>
    )
}
