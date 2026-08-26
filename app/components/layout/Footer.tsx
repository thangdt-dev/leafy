export default function Footer() {
    const footerColumns = [
        {
            title: "Shop",
            links: ["Indoor Plants", "Outdoor Plants", "Succulents", "Planters & Pots", "Accessories"],
        },
        {
            title: "Company",
            links: ["About", "Blog", "Careers", "Press", "Sustainability"],
        },
        {
            title: "Support",
            links: ["Contact Us", "FAQ", "Shipping Policy", "Returns", "Order Tracker"],
        },
    ];

    const socials = [
        {
            name: "Instagram",
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth={2} />
                    <circle cx="12" cy="12" r="4" strokeWidth={2} />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
            ),
        },
        {
            name: "Facebook",
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.5 9H15V6.5h-1.5C11.6 6.5 10.5 7.6 10.5 9.5V11H9v2.5h1.5V21h2.5v-7.5H15l.5-2.5h-2.5V9.5c0-.3.2-.5.5-.5z" />
                </svg>
            ),
        },
        {
            name: "Twitter",
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1-.7-.8-1.8-1.3-3-1.3-2.2 0-4 1.8-4 4 0 .3 0 .6.1.9-3.3-.2-6.3-1.8-8.2-4.2-.4.6-.6 1.3-.6 2 0 1.4.7 2.6 1.8 3.3-.6 0-1.3-.2-1.8-.5v.1c0 1.9 1.4 3.5 3.2 3.9-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.6 2 2.7 3.8 2.8-1.4 1.1-3.2 1.7-5.1 1.7-.3 0-.7 0-1-.1 1.8 1.2 4 1.8 6.3 1.8 7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z" />
                </svg>
            ),
        },
        {
            name: "YouTube",
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="2" y="6" width="20" height="12" rx="4" strokeWidth={2} />
                    <path d="M10.5 10l4 2-4 2v-4z" fill="currentColor" stroke="none" />
                </svg>
            ),
        },
    ];

    return (
        <footer className="border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 sm:gap-10">
                    {/* Brand column */}
                    <div className="col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-full bg-lime-400 flex items-center justify-center text-sm">
                                🍃
                            </span>
                            <span className="text-lg font-bold text-black">Leafy</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-4 leading-relaxed max-w-xs">
                            Integrating nature naturally inside your architecture. Premium carefully-sourced plants, handcrafted planters, and automated maintenance coaching.
                        </p>
                        <div className="flex items-center gap-3 mt-5">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    aria-label={social.name}
                                    className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-colors"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {footerColumns.map((column) => (
                        <div key={column.title}>
                            <h3 className="font-bold text-black text-sm">{column.title}</h3>
                            <ul className="mt-4 flex flex-col gap-3">
                                {column.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-gray-500 text-sm hover:text-black transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-100 mt-10 sm:mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm order-2 sm:order-1">
                        Copyright © 2024 Leafy. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 order-1 sm:order-2">
                        <a href="#" className="text-gray-500 text-sm hover:text-black transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-500 text-sm hover:text-black transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer >
    );
}