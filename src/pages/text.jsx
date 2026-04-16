import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // basic validation
        if (!form.name || !form.email || !form.message) {
            alert("Please fill all fields");
            return;
        }

        // fake submit (later backend connect kar sakte ho)
        console.log(form);
        setSuccess(true);

        setForm({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <section id="contact" className="min-h-screen bg-[#0a0a0f] text-gray-100 px-6 md:px-16 py-20">

            {/* Heading */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold">
                    Contact <span className="text-green-400">Me</span>
                </h1>
                <p className="text-gray-400 mt-4">
                    Let's discuss your project or just say hello 👋
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">

                {/* LEFT INFO */}
                <div className="space-y-6">

                    <div className="p-6 border border-gray-700">
                        <h3 className="text-lg font-semibold text-green-400">Email</h3>
                        <p className="text-gray-400">yogeshkanwar20@gmail.com</p>
                    </div>

                    <div className="p-6 border border-gray-700">
                        <h3 className="text-lg font-semibold text-green-400">Phone</h3>
                        <p className="text-gray-400">9669309394</p>
                    </div>

                    <div className="p-6 border border-gray-700">
                        <h3 className="text-lg font-semibold text-green-400">Location</h3>
                        <p className="text-gray-400">Durg</p>
                    </div>

                </div>

                {/* RIGHT FORM */}
                <form
                    onSubmit={handleSubmit}
                    className="p-8 border border-gray-700 space-y-6"
                >

                    <div>
                        <label className="text-sm text-gray-400">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full mt-2 p-3 bg-[#111118] border border-gray-700 outline-none focus:border-green-400"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-400">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full mt-2 p-3 bg-[#111118] border border-gray-700 outline-none focus:border-green-400"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-400">Message</label>
                        <textarea
                            name="message"
                            rows="5"
                            value={form.message}
                            onChange={handleChange}
                            className="w-full mt-2 p-3 bg-[#111118] border border-gray-700 outline-none focus:border-green-400"
                            placeholder="Write your message..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-400 text-black py-3 font-bold hover:brightness-90"
                    >
                        Send Message 🚀
                    </button>

                    {success && (
                        <p className="text-green-400 text-sm text-center">
                            ✅ Message sent successfully!
                        </p>
                    )}
                </form>
            </div>
        </section >
    );
}