"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Vui lòng nhập đầy đủ email và mật khẩu.");
            return;
        }

        setLoading(true);
        try {
            // TODO: gọi API đăng nhập thực tế ở đây
            console.log("Login with:", { email, password });
            await new Promise((r) => setTimeout(r, 800));
        } catch {
            setError("Đăng nhập thất bại. Vui lòng thử lại.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Left: form */}
            <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-12">
                <div className="w-full max-w-sm mx-auto">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 mb-10">
                        <span className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center text-sm">
                            🍃
                        </span>
                        <span className="text-lg font-bold text-black">Leafy</span>
                    </Link>

                    <h1 className="text-3xl sm:text-4xl font-bold text-black">Welcome back</h1>
                    <p className="text-gray-500 mt-2 text-sm sm:text-base">
                        Đăng nhập để tiếp tục chăm sóc khu vườn của bạn.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-black">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="mt-1.5 w-full rounded-full border border-gray-300 px-5 py-3 text-sm text-black placeholder-gray-400 outline-none focus:border-black transition-colors"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="text-sm font-medium text-black">
                                    Mật khẩu
                                </label>
                                <Link href="#" className="text-xs text-gray-500 hover:text-black underline underline-offset-2">
                                    Quên mật khẩu?
                                </Link>
                            </div>
                            <div className="relative mt-1.5">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full rounded-full border border-gray-300 px-5 py-3 pr-12 text-sm text-black placeholder-gray-400 outline-none focus:border-black transition-colors"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                                >
                                    {showPassword ? (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Error message */}
                        {error && (
                            <p className="text-sm text-red-600 -mt-1">{error}</p>
                        )}

                        {/* Remember me */}
                        <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer select-none">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-lime-400" />
                            Ghi nhớ đăng nhập
                        </label>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-2 w-full bg-black text-white font-semibold text-sm py-3.5 rounded-full hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-6">
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="text-xs text-gray-400">hoặc tiếp tục với</span>
                        <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    {/* Social login */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-full py-3 text-sm font-medium text-black hover:bg-gray-50 transition-colors">
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09a6.6 6.6 0 010-4.18V7.07H2.18a11 11 0 000 9.86l3.66-2.84z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Google
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-full py-3 text-sm font-medium text-black hover:bg-gray-50 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.94-.19 1.83-.87 3.03-.78 1.44.11 2.53.68 3.24 1.76-2.95 1.75-2.36 5.87.35 7.02-.47 1.24-1.06 2.47-1.7 3.17zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                            </svg>
                            Apple
                        </button>
                    </div>

                    <p className="text-center text-sm text-gray-500 mt-8">
                        Chưa có tài khoản?{" "}
                        <Link href="/register" className="font-semibold text-black hover:underline underline-offset-2">
                            Đăng ký ngay
                        </Link>
                    </p>
                </div>
            </div>

            {/* Right: image panel - hidden on mobile */}
            <div className="hidden lg:block lg:w-1/2 relative">
                <img
                    src="https://images.unsplash.com/photo-1545165375-1b744b9ed444?w=1200&h=1600&fit=crop"
                    alt="Indoor plants"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-12 left-12 right-12 text-white">
                    <p className="text-2xl font-bold leading-snug">
                        "Bring Nature Into Your Space – For Peace, Balance, and Growth."
                    </p>
                    <div className="flex items-center gap-3 mt-6">
                        <img
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="reviewer"
                            className="w-10 h-10 rounded-full border-2 border-white"
                        />
                        <div>
                            <p className="font-semibold text-sm">Elena Rostova</p>
                            <p className="text-xs text-white/70">Urban Jungle Creator</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}