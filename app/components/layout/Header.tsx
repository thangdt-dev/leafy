"use client";

import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full  backdrop-blur-md border-b border-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between relative">
                {/* Left menu - hidden on mobile */}
                <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
                    <a href="#" className="text-black relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-4 after:h-[2px] after:bg-black">
                        Home
                    </a>
                    <a href="#" className="hover:text-black transition-colors">Shop</a>
                    <a href="#" className="flex items-center gap-1 hover:text-black transition-colors">
                        Product
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                    <a href="#" className="hover:text-black transition-colors">Blog</a>
                    <a href="#" className="flex items-center gap-1 hover:text-black transition-colors">
                        Pages
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                </nav>

                {/* Mobile menu button */}
                <button
                    aria-label="Toggle menu"
                    onClick={() => setOpen(!open)}
                    className="lg:hidden text-gray-700 hover:text-black"
                >
                    {open ? (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {/* Logo */}
                <div className="flex items-center gap-2 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-lime-400 flex items-center justify-center text-sm sm:text-base">
                        🍃
                    </span>
                    <span className="text-base sm:text-lg font-bold text-black">Leafy</span>
                </div>

                {/* Right actions */}
                <div className="flex items-center gap-2 sm:gap-5">
                    <button aria-label="Search" className="hidden sm:inline-flex text-gray-700 hover:text-black">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                        </svg>
                    </button>
                    <button aria-label="Cart" className="hidden sm:inline-flex text-gray-700 hover:text-black">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1.5 12h-11L5 9z" />
                        </svg>
                    </button>
                    <button className="hidden md:inline-flex px-4 lg:px-5 py-2 text-sm font-medium border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                        Login
                    </button>
                    <button className="px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                        Register
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 border-t border-gray-100" : "max-h-0"
                    }`}
            >
                <nav className="flex flex-col px-4 py-4 gap-4 text-sm font-medium text-gray-700 bg-white">
                    <a href="#" className="text-black">Home</a>
                    <a href="#" className="flex items-center justify-between">
                        Shop
                    </a>
                    <a href="#" className="flex items-center justify-between">
                        Product
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                    <a href="#">Blog</a>
                    <a href="#" className="flex items-center justify-between">
                        Pages
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                    <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
                        <button aria-label="Search" className="text-gray-700">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                            </svg>
                        </button>
                        <button aria-label="Cart" className="text-gray-700">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1.5 12h-11L5 9z" />
                            </svg>
                        </button>
                        <button className="ml-auto px-5 py-2 text-sm font-medium border border-gray-300 rounded-full">
                            Login
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}