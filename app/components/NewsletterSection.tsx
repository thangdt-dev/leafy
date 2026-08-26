"use client";

import { useState } from "react";

export default function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !email.includes("@")) {
            setStatus("error");
            return;
        }

        // TODO: gọi API subscribe thực tế ở đây
        console.log("Subscribing email:", email);
        setStatus("success");
        setEmail("");
    };

    return (
        <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-16">
            <div className="bg-lime-400 border-2 border-black rounded-[2.5rem] px-6 sm:px-10 py-12 sm:py-16 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                    Join the Leafy Community
                </h2>
                <p className="text-black/70 mt-4 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                    Sign up today and receive our exclusive plant care handbook, secret nurturing guides, and 15% off your first checkout.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0 sm:bg-white sm:rounded-full sm:p-1.5"
                >
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (status !== "idle") setStatus("idle");
                        }}
                        placeholder="Enter your email address"
                        className="flex-1 bg-white sm:bg-transparent rounded-full sm:rounded-none px-5 py-3.5 sm:py-2 text-sm text-black placeholder-gray-400 outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-black text-white font-semibold text-sm px-6 py-3.5 sm:py-3 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap"
                    >
                        Subscribe
                    </button>
                </form>

                {/* Feedback message */}
                <div className="h-5 mt-3">
                    {status === "success" && (
                        <p className="text-sm font-medium text-black/80">
                            🎉 Cảm ơn bạn đã đăng ký! Kiểm tra email để nhận ưu đãi.
                        </p>
                    )}
                    {status === "error" && (
                        <p className="text-sm font-medium text-red-700">
                            Vui lòng nhập email hợp lệ.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}